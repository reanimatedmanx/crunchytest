import { action, makeObservable, observable } from 'mobx'
import { MediaApiState } from '../enums/media-api-state.enum'
import { from, switchMap, of, retry, timer, tap, throwError } from 'rxjs'

import { MediaApiClient } from '../clients'

export class MediaStore {
  static HEALTHCHECK_RETRIES = 200
  static ACTIVE_RETRY_DELAY_MS = 2000

  mediaApiObservable$ = from(MediaApiClient.getHealthcheck()).pipe(
    switchMap((response) => {
      if (response.status !== 200) {
        throw response.statusText
      }

      return of(response.data)
    }),
    retry({
      count: MediaStore.HEALTHCHECK_RETRIES,
      resetOnSuccess: true,
      delay: (response, retries) =>
        timer(retries * MediaStore.ACTIVE_RETRY_DELAY_MS).pipe(
          tap(() => console.error(retries, response.code)),
          switchMap(() => throwError(() => response.code)),
        ),
    }),
  )

  constructor() {
    makeObservable(this)

    this.mediaApiObservable$.subscribe({
      next: () => this.updateApiState(MediaApiState.Pending),
      error: (error) => {
        this.updateApiState(MediaApiState.Error)
        this.updateApiStateErrorMessage(error)
      },
      complete: () => {
        this.updateApiState(MediaApiState.Ready)
        this.updateApiStateErrorMessage('')
      },
    })
  }

  // #region Observables

  @observable mediaList = []
  @observable state: MediaApiState = MediaApiState.Unknown
  @observable stateErrorMessage: string = ''

  // #endregion

  // #region Actions

  @action
  updateApiState(newState: MediaApiState) {
    this.state = newState
  }

  @action
  updateApiStateErrorMessage(newState: string) {
    this.stateErrorMessage = newState
  }

  // #endregion

  // #region Computed fields

  // ...

  // #endregion
}

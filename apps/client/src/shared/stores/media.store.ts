import { action, computed, makeObservable, observable } from 'mobx'
import { MediaApiState } from '../enums/media-api-state.enum'
import {
  from,
  switchMap,
  of,
  retry,
  timer,
  tap,
  throwError,
  catchError,
} from 'rxjs'

import { FindMediaDto, MediaApiClient, Media, CreateMediaDto } from '../clients'

export class MediaStore {
  static HEALTHCHECK_RETRIES = 200
  static ACTIVE_RETRY_DELAY_MS = 2000

  $healthcheck = from(MediaApiClient.getHealthcheck()).pipe(
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

    this.$healthcheck.subscribe({
      next: () => this.updateApiState(MediaApiState.Pending),
      error: (error) => {
        this.updateApiState(MediaApiState.Error)
        this.updateApiStateErrorMessage(error)
      },
      complete: () => {
        this.updateApiState(MediaApiState.Ready)
        this.updateApiStateErrorMessage('')
        this.findMedia()
      },
    })
  }

  private updateMediaList(data: Media | Media[]): void {
    if (Array.isArray(data)) {
      this.$mediaList = data
    } else {
      this.$mediaList = [...this.$mediaList, data]
    }
  }

  private removeMediaById(id: string): void {
    this.$mediaList = this.$mediaList.filter((m) => m.id !== id)
  }

  // #region Observables

  @observable $mediaList: Media[] = []
  @observable $state: MediaApiState = MediaApiState.Unknown
  @observable $stateErrorMessage: string = ''

  // #endregion

  // #region Actions

  @action
  protected updateApiState(newState: MediaApiState) {
    this.$state = newState
  }

  @action
  protected updateApiStateErrorMessage(newState: string) {
    this.$stateErrorMessage = newState
  }

  @action
  findMedia(dto?: FindMediaDto) {
    const observable = from(MediaApiClient.findMedia(dto))

    this.updateApiState(MediaApiState.Pending)

    return observable
      .pipe(
        switchMap((response) => from([response.data])),
        catchError((error) => of(error)),
      )
      .subscribe({
        next: (data) => {
          this.updateMediaList(data)
        },
        error: (error) => {
          console.error(error)
          this.updateApiState(MediaApiState.Error)
          this.updateApiStateErrorMessage(error)
        },
        complete: () => {
          this.updateApiState(MediaApiState.Ready)
          this.updateApiStateErrorMessage('')
        },
      })
  }

  @action
  createMedia(dto?: CreateMediaDto) {
    const observable = from(MediaApiClient.createMedia(dto))

    this.updateApiState(MediaApiState.Pending)

    return observable
      .pipe(
        switchMap((response) => from([response.data])),
        catchError((error) => of(error)),
      )
      .subscribe({
        next: (data) => {
          this.updateMediaList(data)
        },
        error: (error) => {
          console.error(error)
          this.updateApiState(MediaApiState.Error)
          this.updateApiStateErrorMessage(error)
        },
        complete: () => {
          this.updateApiState(MediaApiState.Ready)
          this.updateApiStateErrorMessage('')
        },
      })
  }

  @action
  deleteMedia(id: string) {
    const observable = from(MediaApiClient.deleteMedia(id))

    this.updateApiState(MediaApiState.Pending)

    return observable
      .pipe(
        switchMap((response) => from([response.data])),
        catchError((error) => of(error)),
      )
      .subscribe({
        next: (data) => {
          this.removeMediaById(data.id)
        },
        error: (error) => {
          console.error(error)
          this.updateApiState(MediaApiState.Error)
          this.updateApiStateErrorMessage(error)
        },
        complete: () => {
          this.updateApiState(MediaApiState.Ready)
          this.updateApiStateErrorMessage('')
        },
      })
  }

  // #endregion

  // #region Computed

  @computed
  get mediaListCount() {
    return this.$mediaList.length
  }

  // #endregion
}

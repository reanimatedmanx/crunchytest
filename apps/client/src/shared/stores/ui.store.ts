import { action, computed, makeObservable, observable } from 'mobx'
import { CreateMediaDto, FindMediaDto } from '../clients'

type ActionName =
  | 'CREATE_MEDIA'
  | 'SEARCH_MEDIA'
  | 'READ_MEDIA'
  | 'UPDATE_MEDIA'
  | 'DELETE_MEDIA'

export class UIStore {
  constructor() {
    makeObservable(this)
  }

  // #region Observables

  @observable
  private $actionsQueue: Map<
    ActionName,
    | Parameters<typeof this.requestCreateMedia>[0]
    | Parameters<typeof this.requestSearchMedia>[0]
    | Parameters<typeof this.requestDeleteMedia>[0]
  > = new Map()

  // #endregion

  // #region Actions

  @action
  requestCreateMedia(payload: CreateMediaDto): void {
    this.$actionsQueue.set('CREATE_MEDIA', payload)
  }

  @action
  requestSearchMedia(payload: FindMediaDto): void {
    this.$actionsQueue.set('SEARCH_MEDIA', {
      page: 0,
      size: 100,
      title: payload.title,
      type: payload.type,
    })
  }

  @action
  requestDeleteMedia(id: string): void {
    this.$actionsQueue.set('DELETE_MEDIA', id)
  }

  @action
  clearQueue() {
    this.$actionsQueue.clear()
  }

  // ...

  // #endregion

  // #region Computeds

  @computed
  get queue() {
    return [...this.$actionsQueue.entries()]
  }

  @computed
  get queueSize() {
    return this.$actionsQueue.size
  }

  // #endregion
}

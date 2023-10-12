import { action, computed, makeObservable, observable } from 'mobx'
import { CreateMediaDto } from '../clients'

type ActionName =
  | 'CREATE_MEDIA'
  | 'SEARCH_MEDIA'
  | 'READ_MEDIA'
  | 'UPDATE_MEDIA'
  | 'DELETE_MEDIA'
type ActionPayload = CreateMediaDto

export class UIStore {
  constructor() {
    makeObservable(this)
  }

  // #region Observables

  @observable
  private $actionsQueue: Map<ActionName, ActionPayload> = new Map()

  // #endregion

  // #region Actions

  @action
  requestCreateMedia(payload: CreateMediaDto) {
    this.$actionsQueue.set('CREATE_MEDIA', payload)
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

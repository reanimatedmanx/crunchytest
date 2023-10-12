import { createContext } from 'react'
import { UIStore } from './ui.store'
import { action, computed, makeAutoObservable, observable } from 'mobx'
import { AppState } from '../enums'
import { MediaStore } from './media.store'

export class _AppStore {
  public uiStore: UIStore
  public mediaStore: MediaStore

  constructor() {
    makeAutoObservable(this)

    this.uiStore = new UIStore()
    this.mediaStore = new MediaStore()

    this.updateState(AppState.Ready)

    window.ononline = () => {
      this.updateState(AppState.Ready)
    }

    window.onoffline = () => {
      this.updateState(AppState.NetError)
    }
  }

  // #region Observables

  @observable
  private $state: AppState = AppState.Idle

  // #endregion

  // #region Actions

  @action
  updateState = (newState: AppState) => {
    this.$state = newState
  }

  // #endregion

  // #region Computeds

  @computed
  get state() {
    return this.$state
  }

  // #endregion
}

const store = new _AppStore()

export const AppStore = createContext(store)

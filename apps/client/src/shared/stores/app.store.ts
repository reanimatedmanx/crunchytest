import { createContext } from 'react'
import { UIStore } from './ui.store'
import { action, makeObservable, observable } from 'mobx'
import { AppState } from '../enums'
import { MediaStore } from './media.store'

export class _AppStore {
  public uiStore: UIStore
  public mediaStore: MediaStore

  constructor() {
    makeObservable(this)

    this.uiStore = new UIStore()
    this.mediaStore = new MediaStore()

    window.ononline = () => {
      this.updateState(AppState.Ready)
    }

    window.onoffline = () => {
      this.updateState(AppState.NetError)
    }
  }

  // #region Observables

  @observable
  state: AppState = AppState.Idle

  // #endregion

  // #region Actions

  @action
  updateState = (newState: AppState) => {
    this.state = newState
  }

  // #endregion
}

export const AppStore = createContext(new _AppStore())

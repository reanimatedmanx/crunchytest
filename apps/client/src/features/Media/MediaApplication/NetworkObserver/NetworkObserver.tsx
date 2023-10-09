import { InfoCircledIcon } from '@radix-ui/react-icons'
import { Callout, Flex, Strong } from '@radix-ui/themes'
import { observer } from 'mobx-react'
import { useContext, useMemo } from 'react'
import { AppState } from '../../../../shared/enums'
import { AppStore } from '../../../../shared/stores'
import { MediaApiState } from '../../../../shared/enums/media-api-state.enum'
// ☝️ CRA Without eject is a nightmare to setup paths, my eyes...

export const NetworkObserver = observer(() => {
  const { state, mediaStore } = useContext(AppStore)

  const networkError = useMemo(
    () =>
      state === AppState.NetError
        ? `Your internet connection seems to be down. Try again later...`
        : null,
    [state],
  )

  const apiError = useMemo(
    () =>
      mediaStore.state === MediaApiState.Error
        ? `${mediaStore.stateErrorMessage}: The Media API service is currently unavailable. Please try again later...`
        : null,
    [mediaStore.state, mediaStore.stateErrorMessage],
  )

  const shouldShowError = useMemo(
    () => networkError || apiError,
    [networkError, apiError],
  )

  return shouldShowError ? (
    <Callout.Root color="crimson" style={{ justifyContent: 'center' }}>
      <Flex direction="row" gap="2" width="100%">
        <Callout.Icon>
          <InfoCircledIcon />
        </Callout.Icon>
        <Callout.Text>
          <Strong>{networkError || apiError}</Strong>
        </Callout.Text>
      </Flex>
    </Callout.Root>
  ) : (
    <></>
  )
})

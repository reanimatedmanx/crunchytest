import { InfoCircledIcon } from '@radix-ui/react-icons'
import { Callout, Flex, Strong } from '@radix-ui/themes'
import { observer } from 'mobx-react'
import { useContext, useMemo } from 'react'
import { AppState } from '../../../../shared/enums'
import { AppStore } from '../../../../shared/stores'

export const NetworkObserver = observer(() => {
  const store = useContext(AppStore)

  const showNetworkError = useMemo(
    () => store.state === AppState.NetError,
    [store.state],
  )

  return showNetworkError ? (
    <Callout.Root color="crimson" style={{ justifyContent: 'center' }}>
      <Flex direction="row" gap="2" width="100%">
        <Callout.Icon>
          <InfoCircledIcon />
        </Callout.Icon>
        <Callout.Text>
          <Strong>
            Your internet connection seems to be down. Try again later...
          </Strong>
        </Callout.Text>
      </Flex>
    </Callout.Root>
  ) : (
    <></>
  )
})

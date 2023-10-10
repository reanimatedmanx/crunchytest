// TODO Add import aliases
// TODO Setup import order ESLint rule
import { Header } from '../../../shared/components/Header'
import { Content } from '../../../shared/components/Content'
import { MediaList } from '../MediaList'
import { observer } from 'mobx-react'
import { Container, Flex } from '@radix-ui/themes'
import { Logo } from '../../../shared/components/Logo'
import { MediaFilterBar } from '../MediaFilterBar'
import { MediaForm } from '../MediaForm'
import { NetworkObserver } from './NetworkObserver'
import { useContext, useEffect } from 'react'
import { AppStore } from '../../../shared/stores'

export const MediaApplication = observer(() => {
  const { mediaStore } = useContext(AppStore)

  // #region 1. Kickstart initial list fetch
  useEffect(() => {
    const subscription = mediaStore.findMedia()

    return () => subscription.unsubscribe()
  }, [mediaStore])

  // #endregion

  return (
    <>
      <NetworkObserver />
      <Container>
        <Flex direction="column" gap="5" mt="5">
          <Header>
            <Logo />
            <MediaForm />
          </Header>
          <Content>
            <MediaFilterBar />
            <Flex direction="column" mt="5">
              <MediaList />
            </Flex>
          </Content>
        </Flex>
      </Container>
    </>
  )
})

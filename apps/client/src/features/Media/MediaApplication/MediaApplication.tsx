// TODO Add import aliases
// TODO Setup import order ESLint rule
import { CreateMediaDto, FindMediaDto } from '../../../shared/clients'
import { Header, Content, Logo } from '../../../shared/components'
import { MediaList } from '../MediaList'
import { observer } from 'mobx-react'
import { Container, Flex } from '@radix-ui/themes'
import { MediaFilterBar } from '../MediaFilterBar'
import { MediaForm } from '../MediaForm'
import { NetworkObserver } from './NetworkObserver'
import { useContext } from 'react'
import { AppStore } from '../../../shared/stores'
import { autorun } from 'mobx'

export const MediaApplication = observer(() => {
  const { uiStore, mediaStore } = useContext(AppStore)

  autorun(() => {
    if (uiStore.queueSize > 0) {
      for (const [name, payload] of uiStore.queue) {
        if (name === 'CREATE_MEDIA') {
          mediaStore.createMedia(payload as CreateMediaDto)
        }

        if (name === 'SEARCH_MEDIA') {
          mediaStore.findMedia(payload as FindMediaDto)
        }

        if (name === 'DELETE_MEDIA') {
          mediaStore.deleteMedia(payload as string)
        }

        uiStore.clearQueue()
      }
    }
  })

  return (
    <>
      <NetworkObserver />
      <Container>
        <Flex
          direction="column"
          gap="5"
          mt="5"
          p={{
            initial: '4',
            lg: '0',
          }}
        >
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

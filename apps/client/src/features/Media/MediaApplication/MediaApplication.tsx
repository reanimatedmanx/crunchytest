// TODO Add import aliases
// TODO Setup import order ESLint rule
import { Header } from '../../../shared/components/Header'
import { Content } from '../../../shared/components/Content'
import { MediaList } from '../MediaList'
import { useContext, useEffect, useMemo } from 'react'
import { AppStore } from '../../../shared/stores/app.store'
import { observer } from 'mobx-react'
import { Container, Flex } from '@radix-ui/themes'
import { Logo } from '../../../shared/components/Logo'
import { MediaFilterBar } from '../MediaFilterBar'
import { MediaForm } from '../MediaForm'
import { NetworkObserver } from './NetworkObserver'

export const MediaApplication = observer(() => {
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

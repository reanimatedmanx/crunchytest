import { Container, Flex, Theme } from '@radix-ui/themes'
import '@radix-ui/themes/styles.css'
import './App.css'

// TODO Add import aliases
import { Header } from './shared/components/Header'
import { Content } from './shared/components/Content'
import { MediaList } from './features/Media/MediaList'
import { Logo } from './shared/components/Logo'
import { MediaFilterBar } from './features/Media/MediaFilterBar'
import { MediaForm } from './features/Media/MediaForm'

function App() {
  // TODO: Remove me
  console.info(process.env.REACT_APP_PUBLIC_API)

  return (
    <Theme
      appearance="inherit"
      accentColor="orange"
      grayColor="gray"
      panelBackground="solid"
      scaling="100%"
    >
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
    </Theme>
  )
}

export default App

import { Container, Theme } from '@radix-ui/themes'
import '@radix-ui/themes/styles.css'
import './theme.css'

// TODO Add import aliases
import { Header } from './shared/components/Header'
import { Content } from './shared/components/Content'
import { MediaList } from './features/Media/MediaList'
import { AddMediaButton } from './features/Media/shared'
import { Logo } from './shared/components/Logo'
function App() {
  // TODO: Remove me
  console.info(process.env.REACT_APP_PUBLIC_API)

  return (
    <Theme
      appearance="dark"
      accentColor="blue"
      grayColor="gray"
      panelBackground="solid"
      scaling="100%"
    >
      <Container>
        <Header>
          <Logo />
          <AddMediaButton />
        </Header>
        <Content>
          <MediaList />
        </Content>
      </Container>
    </Theme>
  )
}

export default App

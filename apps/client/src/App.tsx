import { Theme } from '@radix-ui/themes'
import '@radix-ui/themes/styles.css'
import './App.css'

// TODO Add import aliases
import { MediaApplication } from './features/Media/MediaApplication'

function App() {
  return (
    <Theme
      appearance="inherit"
      accentColor="orange"
      grayColor="gray"
      panelBackground="solid"
      scaling="100%"
    >
      <MediaApplication />
    </Theme>
  )
}

export default App

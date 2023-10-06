import { Container, Box } from "@radix-ui/themes";

// TODO Add import aliases
import { Header } from "./shared/components/Header";
import { Content } from "./shared/components/Content";
import { MediaList } from "./features/Media/MediaList";
function App() {
  return (
    <Container>
      <Header></Header>
      <Content>
        <MediaList />
      </Content>
    </Container>
  );
}

export default App;

import { Container } from "@radix-ui/themes";

// TODO Add import aliases
import { Header } from "./shared/components/Header";
import { Content } from "./shared/components/Content";
import { MediaList } from "./features/Media/MediaList";
function App() {
  // TODO: Remove me
  console.info(process.env.REACT_APP_PUBLIC_API);

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

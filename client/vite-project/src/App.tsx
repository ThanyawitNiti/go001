import { Button, Stack,Container } from "@chakra-ui/react";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Stack h="100vh">
      <Navbar/>
      <Container>
    {/* <TodoForm> */}

    {/* <TodoList /> */}
      <Button>Hello !!!</Button>
      </Container>
    </Stack>
  );
}

export default App;

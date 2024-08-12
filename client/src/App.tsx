import { Container, Stack } from "@chakra-ui/react";
import Navbar from "./Navbar";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

export const BASE_URL = import.meta.env.MODE === "development" ? "http://localhost:5000/api" : "/api";

function App() {
	return (
		<Stack h='100vh'>
			<Navbar />
			<Container>
				<TodoForm />
				<TodoList />
			</Container>
		</Stack>
	);
}

export default App;
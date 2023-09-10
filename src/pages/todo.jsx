import { TodoProvider } from "../Contexts/TodoContext";
import { TodoTemplate } from "../components/templates/TodoTemplate";

export const TodoPage = () => (
  <TodoProvider>
    <TodoTemplate />
  </TodoProvider>
);

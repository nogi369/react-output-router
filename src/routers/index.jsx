import { createBrowserRouter } from "react-router-dom";
import { BASE_PATH } from "../constants/navigations";
import { TodoPage } from "../pages/todo";

export const router = createBrowserRouter([
  {
    path: BASE_PATH,
    element: <TodoPage />,
  },
]);

import { createBrowserRouter } from "react-router-dom";
import { BASE_PATH, NAVIGATION_LIST } from "../constants/navigations";
import { TodoPage } from "../pages/todo";
import { TodoCreatePage } from "../pages/create";
import { TodoDetailPage } from "../pages/detail";
import { TodoEditPage } from "../pages/edit";

export const router = createBrowserRouter([
  {
    path: BASE_PATH,
    element: <TodoPage />,
  },
  {
    path: NAVIGATION_LIST.DETAILE,
    element: <TodoDetailPage />,
  },
  {
    path: NAVIGATION_LIST.CREATE,
    element: <TodoCreatePage />,
  },
  {
    path: NAVIGATION_LIST.EDIT,
    element: <TodoEditPage />,
  },
]);

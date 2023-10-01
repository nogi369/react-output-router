import { createBrowserRouter } from "react-router-dom";
import { BASE_PATH, NAVIGATION_LIST } from "../constants/navigations";
import { TodoPage } from "../pages/todo";
import { TodoCreatePage } from "../pages/create";

export const router = createBrowserRouter([
  {
    path: BASE_PATH,
    element: <TodoPage />,
  },
  {
    path: NAVIGATION_LIST.DETAILE,
    element: <TodoCreatePage />,
  },
  {
    path: NAVIGATION_LIST.CREATE,
    element: <TodoCreatePage />,
  },
  {
    path: NAVIGATION_LIST.EDIT,
    element: <TodoCreatePage />,
  },
]);

// `${BASE_PATH}/create/

// ベースPATH
// export const BASE_PATH = "react-output-router";

// やりたいこと
// "react-output-router/create"

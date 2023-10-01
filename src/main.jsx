import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { TodoProvider } from "./Contexts/TodoContext";
import { RouterProvider } from "react-router-dom";
import { router } from "./routers";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TodoProvider>
      <RouterProvider router={router} />
    </TodoProvider>
  </React.StrictMode>
);

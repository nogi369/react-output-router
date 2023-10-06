import { useState, useCallback, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { NAVIGATION_PATH } from "../../../constants/navigations";

export const useTodoEditTemplate = ({ originTodoList, updateTodo }) => {
  const navigate = useNavigate();

  const { id } = useParams();

  const todo = useMemo(
    () => originTodoList.find((todo) => String(todo.id) === id),
    [id, originTodoList]
  );

  // local state
  const [inputTitle, setInputTitle] = useState(todo?.title || "");
  const [inputContent, setInputContent] = useState(todo?.content || "");

  // title変更処理
  const handleChangeTitle = useCallback(
    (e) => setInputTitle(e.target.value),
    []
  );

  // content変更処理
  const handleChangeContent = useCallback(
    (e) => setInputContent(e.target.value),
    []
  );

  // Todo更新処理
  const handleUpdateTodo = useCallback(
    (e) => {
      e.preventDefault();
      if (!!todo?.id && inputTitle !== "" && inputContent !== "") {
        updateTodo(todo.id, inputTitle, inputContent);
        navigate(NAVIGATION_PATH.TOP);
      }
    },
    [navigate, todo?.id, inputTitle, inputContent, updateTodo]
  );

  const states = { todo, inputTitle, inputContent };

  const actions = { handleChangeTitle, handleChangeContent, handleUpdateTodo };

  return [states, actions];
};

import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { NAVIGATION_PATH } from "../../../constants/navigations";

export const useTodoCreateTemplate = ({ addTodo }) => {
  const navigate = useNavigate();

  // local state
  const [inputTitle, setInputTitle] = useState("");
  const [inputContent, setInputContent] = useState("");

  // 「title」変更処理
  const handleChangeTitle = useCallback(
    (e) => setInputTitle(e.target.value),
    []
  );

  // 「content」変更処理
  const handleChangeContent = useCallback(
    (e) => setInputContent(e.target.value),
    []
  );

  // Todo追加処理
  const handleCreateTodo = useCallback(
    (e) => {
      e.preventDefault();
      if (inputTitle !== "" && inputContent !== "") {
        addTodo(inputTitle, inputContent);
        navigate(NAVIGATION_PATH.TOP);
      }
    },
    [addTodo, inputTitle, inputContent, navigate]
  );

  const states = { inputTitle, inputContent };

  const actions = { handleChangeTitle, handleChangeContent, handleCreateTodo };

  return [states, actions];
};

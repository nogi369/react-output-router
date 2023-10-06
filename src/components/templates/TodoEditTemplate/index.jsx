import { useNavigate, useParams } from "react-router-dom";
import { useTodoContext } from "../../../Contexts/TodoContext";
import { BaseLayout } from "../../organisms/BaseLayout";
import { InputForm } from "../../atoms/InputForm";
import { TextArea } from "../../atoms/TextArea";
import styles from "./styles.module.css";
import { useCallback, useState, useMemo } from "react";
import { NAVIGATION_PATH } from "../../../constants/navigations";
import { CommonButton } from "../../atoms/CommonButton";

export const TodoEditTemplate = () => {
  const navigate = useNavigate();

  const { originTodoList, updateTodo } = useTodoContext();
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

  return (
    <BaseLayout title={"TodoEdit"}>
      {!!todo && (
        <form className={styles.container} onSubmit={handleUpdateTodo}>
          <div className={styles.area}>
            <InputForm
              value={inputTitle}
              onChange={handleChangeTitle}
              placeholder={"Title"}
            />
          </div>
          <div className={styles.area}>
            <TextArea
              value={inputContent}
              onChange={handleChangeContent}
              placeholder={"Content"}
            />
          </div>
          <div className={styles.area}>
            <CommonButton type="submit" label="Edit Todo" />
          </div>
        </form>
      )}
    </BaseLayout>
  );
};

// Optional chaining
// https://codelikes.com/javascript-optional-chaining/

// export const TodoCreateTemplate = () => {
//   const { addTodo } = useTodoContext();

// const [
//   { inputTitle, inputContent },
//   { handleChangeTitle, handleChangeContent, handleCreateTodo },
// ] = useTodoCreateTemplate({ addTodo });

//   return (
//     <BaseLayout title={"Create Todo"}>
//       <form className={styles.container} onClick={handleCreateTodo}>
//         <div className={styles.area}>
//           <InputForm
//             placeholder={"Title"}
//             value={inputTitle}
//             onChange={handleChangeTitle}
//           />
//         </div>
//         <div className={styles.area}>
//           <TextArea
//             placeholder={"Content"}
//             value={inputContent}
//             onChange={handleChangeContent}
//           />
//         </div>
//         <div className={styles.area}>
//           <CommonButton label="Create Todo" type="submit" />
//         </div>
//       </form>
//     </BaseLayout>
//   );
// };

import { useTodoContext } from "../../../Contexts/TodoContext";
import { BaseLayout } from "../../organisms/BaseLayout";
import { InputForm } from "../../atoms/InputForm";
import { TextArea } from "../../atoms/TextArea";
import styles from "./styles.module.css";
import { CommonButton } from "../../atoms/CommonButton";
import { useTodoEditTemplate } from "./useTodoEditTemplate";

export const TodoEditTemplate = () => {
  const { originTodoList, updateTodo } = useTodoContext();

  const [
    { todo, inputTitle, inputContent },
    { handleChangeTitle, handleChangeContent, handleUpdateTodo },
  ] = useTodoEditTemplate({ originTodoList, updateTodo });

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

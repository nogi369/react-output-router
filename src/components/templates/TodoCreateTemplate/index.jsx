import { CommonButton } from "../../atoms/CommonButton";
import { InputForm } from "../../atoms/InputForm";
import { TextArea } from "../../atoms/TextArea";
import { BaseLayout } from "../../organisms/BaseLayout";
import styles from "./styles.module.css";
import { useTodoContext } from "../../../Contexts/TodoContext";
import { useTodoCreateTemplate } from "./useTodoCreateTemplate";

export const TodoCreateTemplate = () => {
  const { addTodo } = useTodoContext();

  const [
    { inputTitle, inputContent },
    { handleChangeTitle, handleChangeContent, handleCreateTodo },
  ] = useTodoCreateTemplate({ addTodo });

  return (
    <BaseLayout title={"Create Todo"}>
      <form className={styles.container} onClick={handleCreateTodo}>
        <div className={styles.area}>
          <InputForm
            placeholder={"Title"}
            value={inputTitle}
            onChange={handleChangeTitle}
          />
        </div>
        <div className={styles.area}>
          <TextArea
            placeholder={"Content"}
            value={inputContent}
            onChange={handleChangeContent}
          />
        </div>
        <div className={styles.area}>
          <CommonButton label="Create Todo" type="submit" />
        </div>
      </form>
    </BaseLayout>
  );
};

// useNavigate
// https://rapids-tech.com/react-router-usenavigate/

import { useParams } from "react-router-dom";
import { useTodoContext } from "../../../Contexts/TodoContext";
import { InputForm } from "../../atoms/InputForm";
import { TextArea } from "../../atoms/TextArea";
import { BaseLayout } from "../../organisms/BaseLayout";
import styles from "./styles.module.css";

export const TodoDetailTemplate = () => {
  const { originTodoList } = useTodoContext();
  const { id } = useParams();
  const todo = originTodoList.find((todo) => String(todo.id) === id);

  return (
    <BaseLayout title={"TodoDetail"}>
      {!!todo && (
        <div className={styles.container}>
          <div className={styles.area}>
            <InputForm disabled value={todo.title} placeholder={"Title"} />
          </div>
          <div className={styles.area}>
            <TextArea disabled value={todo.content} placeholder={"Content"} />
          </div>
        </div>
      )}
    </BaseLayout>
  );
};

// find()
// https://takayamato.com/array_find/
// String()
// https://magazine.techacademy.jp/magazine/5568
// falsy
// https://qiita.com/tamakiiii/items/a25db843ece8d89a8d5f#falsy%E3%81%AA%E5%80%A4%E3%81%A8%E3%81%AF
// 二重否定
// https://www.sunapro.com/js%E3%81%AE%E4%BA%8C%E9%87%8D%E5%90%A6%E5%AE%9A/
// useParams
// https://rapids-tech.com/react-router-useparams/

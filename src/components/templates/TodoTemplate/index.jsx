import { TodoList } from "../../organisms/TodoList";
import { InputForm } from "../../atoms/InputForm";
import { useTodoContext } from "../../../Contexts/TodoContext";
import styles from "./styles.module.css";
import { BaseLayout } from "../../organisms/BaseLayout";
import { useTodoTemplate } from "./useTodoTemplate";
// https://lorem-co-ltd.com/react-css/#:~:text=React%E3%81%A7CSS%E3%83%A2%E3%82%B8%E3%83%A5%E3%83%BC%E3%83%AB%E3%82%92%E4%BD%BF%E3%81%A3%E3%81%9F%E3%82%B9%E3%82%BF%E3%82%A4%E3%83%AB%E3%81%AE%E6%9B%B8%E3%81%8D%E6%96%B9

/**
 * TodoTemplate
 * @returns {JSX.Element}
 * @constructor
 */
export const TodoTemplate = () => {
  // コンテキストから状態とロジックを呼び出してコンポーネントにあてがう
  const { originTodoList, deleteTodo } = useTodoContext();

  const [{ searchKeyword, showTodoList }, { handleChangeSearchKeyword }] =
    useTodoTemplate({ originTodoList });

  return (
    <BaseLayout title={"TodoList"}>
      <div className={styles.container}>
        {/* Todo検索フォームエリア */}
        <div className={styles.area}>
          <InputForm
            onChange={handleChangeSearchKeyword}
            value={searchKeyword}
            placeholder={"Search Keyword"}
          />
        </div>
        {/* Todoリスト一覧表示 */}
        <div className={styles.area}>
          {showTodoList.length > 0 && (
            <TodoList todoList={showTodoList} handleDeleteTodo={deleteTodo} />
          )}
        </div>
      </div>
    </BaseLayout>
  );
};

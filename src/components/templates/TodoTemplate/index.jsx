import { useState, useMemo } from "react";
import { TodoList } from "../../organisms/TodoList";
import { InputForm } from "../../atoms/InputForm";
import { useTodoContext } from "../../../Contexts/TodoContext";
import styles from "./styles.module.css";
import { BaseLayout } from "../../organisms/BaseLayout";
// https://lorem-co-ltd.com/react-css/#:~:text=React%E3%81%A7CSS%E3%83%A2%E3%82%B8%E3%83%A5%E3%83%BC%E3%83%AB%E3%82%92%E4%BD%BF%E3%81%A3%E3%81%9F%E3%82%B9%E3%82%BF%E3%82%A4%E3%83%AB%E3%81%AE%E6%9B%B8%E3%81%8D%E6%96%B9

export const TodoTemplate = () => {
  const { originTodoList, deleteTodo } = useTodoContext();

  // 検索キーワード
  const [searchKeyword, setSearchKeyword] = useState("");
  // 表示用Todoリスト
  const showTodoList = useMemo(() => {
    return originTodoList.filter((todo) => {
      // 第1引数 = 検索したい文字, 第2引数 = フラグ
      const regexp = new RegExp("^" + searchKeyword, "i");
      return todo.title.match(regexp);
    });
  }, [originTodoList, searchKeyword]);

  // 検索処理
  const handleChangeSearchKeyword = (e) => setSearchKeyword(e.target.value);

  console.log("test");
  return (
    <BaseLayout title={"TodoList"}>
      <div className={styles.container}>
        {/* Todo検索フォームエリア */}
        <div className={styles.area}>
          <InputForm
            onChange={handleChangeSearchKeyword}
            inputValue={searchKeyword}
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

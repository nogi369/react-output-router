import { useCallback, useState } from "react";
import { INIT_TODO_LIST, INIT_UNIQUE_ID } from "../constants/data";

export const useTodo = () => {
  // Todoリスト
  const [originTodoList, setOriginTodoList] = useState(INIT_TODO_LIST);
  // 一意のid
  const [uniqueId, setUniqueId] = useState(INIT_UNIQUE_ID);

  // 新規登録処理
  const addTodo = useCallback(
    (title, content) => {
      const nextUniqueId = uniqueId + 1;
      const newTodo = [
        ...originTodoList,
        {
          id: nextUniqueId,
          title: title,
          content: content,
        },
      ];
      setOriginTodoList(newTodo);
      setUniqueId(nextUniqueId);
    },
    [originTodoList, uniqueId]
  );

  // 削除処理
  const deleteTodo = (targetId, targetTitle) => {
    // 「OK」時の処理 ＋ 確認ダイアログの表示
    if (window.confirm(`「${targetTitle}」のtodoを削除しますか？`)) {
      const newTodoList = originTodoList.filter((todo) => todo.id !== targetId);

      setOriginTodoList(newTodoList);
    }
  };

  return {
    originTodoList,
    addTodo,
    deleteTodo,
  };
};

import { useState, useMemo, useCallback } from "react";

export const useTodoTemplate = ({ originTodoList }) => {
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
  const handleChangeSearchKeyword = useCallback(
    (e) => setSearchKeyword(e.target.value),
    []
  );

  const states = { searchKeyword, showTodoList };

  const actions = { handleChangeSearchKeyword };

  return [states, actions];
};

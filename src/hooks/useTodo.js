import { useMemo, useState } from "react";
import { INIT_TODO_LIST, INIT_UNIQUE_ID } from "../constants/data";

export const useTodo = () => {
  // Todoリスト
  const [originTodoList, setOriginTodoList] = useState(INIT_TODO_LIST);
  // 入力値
  const [addInputValue, setAddInputValue] = useState("");
  // 一意のid
  const [uniqueId, setUniqueId] = useState(INIT_UNIQUE_ID);
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
  /**
   * useMemo
   * https://qiita.com/seira/items/42576765aecc9fa6b2f8#%E5%9F%BA%E6%9C%AC%E5%BD%A2
   * https://ja.legacy.reactjs.org/docs/hooks-reference.html#usememo
   *
   * useMemoの第二引数([originTodoList, searchKeyword])に依存して処理が実行される
   * originTodoListとsearchKeywordの値が変更される度にfilterの検索処理を実行
   * ただし結果が前回と同じならキャッシュを返却し処理は実行されない(無駄な処理を省いている)
   *
   * アロー関数 : 関数の本体が一文のとき
   * https://qiita.com/deBroglieeeen/items/f146afd1cdf1e89c4121#%E3%82%A2%E3%83%AD%E3%83%BC%E9%96%A2%E6%95%B0%E3%81%AE%E5%9F%BA%E6%9C%AC%E3%81%AE%E5%BD%A2
   */

  // 入力値の更新処理
  const onChangeAddInputValue = (e) => {
    setAddInputValue(e.target.value);
  };

  // 新規登録処理
  const handleAddTodo = (e) => {
    // Enterキーが押された かつ 入力値が空文字でないこと
    if (e.key === "Enter" && addInputValue !== "") {
      const nextUniqueId = uniqueId + 1;

      const newTodoList = [
        ...originTodoList,
        {
          id: nextUniqueId,
          title: addInputValue,
        },
      ];

      setOriginTodoList(newTodoList);
      setUniqueId(nextUniqueId);
      setAddInputValue("");
    }
  };

  // 削除処理
  const handleDeleteTodo = (targetId, targetTitle) => {
    // 「OK」時の処理 ＋ 確認ダイアログの表示
    if (window.confirm(`「${targetTitle}」のtodoを削除しますか？`)) {
      const newTodoList = originTodoList.filter((todo) => todo.id !== targetId);

      setOriginTodoList(newTodoList);
    }
  };

  // 検索処理
  const handleChangeSearchKeyword = (e) => setSearchKeyword(e.target.value);

  return {
    searchKeyword,
    addInputValue,
    showTodoList,
    onChangeAddInputValue,
    handleAddTodo,
    handleDeleteTodo,
    handleChangeSearchKeyword,
  };
};

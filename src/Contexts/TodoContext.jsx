// https://ja.legacy.reactjs.org/docs/context.html

import { createContext, useContext } from "react";
import { useTodo } from "../hooks/useTodo";

// {} = カスタムフックから取り出したオブジェクトがProviderに入ってくるから
const TodoContext = createContext({});

// children: https://choippo.com/react-component-children/
// useTodoからstateとpropsを取り出す
export const TodoProvider = ({ children }) => {
  const {
    searchKeyword,
    addInputValue,
    showTodoList,
    onChangeAddInputValue,
    handleAddTodo,
    handleDeleteTodo,
    handleChangeSearchKeyword,
  } = useTodo();

  // Context.Provider で配下コンポーネントにContextを提供する
  return (
    <TodoContext.Provider
      value={{
        searchKeyword,
        addInputValue,
        showTodoList,
        onChangeAddInputValue,
        handleAddTodo,
        handleDeleteTodo,
        handleChangeSearchKeyword,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export const useTodoContext = () => useContext(TodoContext);

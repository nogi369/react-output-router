import { useCallback, useState } from "react";
import { CommonButton } from "../../atoms/CommonButton";
import { InputForm } from "../../atoms/InputForm";
import { TextArea } from "../../atoms/TextArea";
import { BaseLayout } from "../../organisms/BaseLayout";
import styles from "./styles.module.css";

export const TodoCreateTemplate = () => {
  const [inputTitle, setInputTitle] = useState("");
  const [inputContent, setInputContent] = useState("");

  // 「title」変更処理
  const handleChangeTitle = useCallback(
    (e) => setInputTitle(e.target.value),
    []
  );

  // 「content」変更処理
  const handleChangeContent = useCallback(
    (e) => setInputContent(e.target.value),
    []
  );

  const handleCreateTodo = useCallback((e) => {
    e.preventDefault();
    console.log("aaa");
  }, []);

  console.log("テスト");
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

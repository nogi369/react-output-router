import styles from "./styles.module.css";

/**
 * type, placeholder, value
 * 確認方法: DevToolsのElementタブ
 *
 * onChange
 * https://magazine.techacademy.jp/magazine/20723
 *
 * onKeyDown
 * https://magazine.techacademy.jp/magazine/27030
 */

export const InputForm = (props) => {
  const { disabled = false, value, placeholder, onChange, onKeyDown } = props;

  return (
    <input
      disabled={disabled}
      className={styles.input}
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
    />
  );
};

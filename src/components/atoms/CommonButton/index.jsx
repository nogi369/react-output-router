import styles from "./styles.module.css";

export const CommonButton = ({ label, type, onClick }) => (
  <button className={styles.button} type={type} onClick={onClick}>
    {label}
  </button>
);

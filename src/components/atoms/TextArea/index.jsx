import styles from "./styles.module.css";

/**
 * TextArea
 * @param disabled
 * @param value
 * @param placeholder
 * @param onChange
 * @returns {JSX.Element}
 * @constructor
 */
export const TextArea = ({
  disabled = false,
  placeholder,
  value,
  onChange,
}) => (
  <textarea
    disabled={disabled}
    className={styles.text}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
  />
);

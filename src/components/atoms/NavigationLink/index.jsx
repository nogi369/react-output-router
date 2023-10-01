import { Link } from "react-router-dom";
import styles from "./styles.module.css";

export const NavigationLink = (props) => {
  const { title, linkPath } = props;
  return (
    <li className={styles.li}>
      <Link to={linkPath}>{title}</Link>
    </li>
  );
};

// Link使い方
// <Link to="page1">Sample Page1</Link>

import { Navigation } from "../../molecules/Navigation";
import styles from "./styles.module.css";

/**
 * BaseLayout
 * @param children
 * @param title
 * @returns {JSX.Element}
 * @constructor
 */
export const BaseLayout = ({ children, title }) => (
  <div className={styles.container}>
    <section className={styles.common}>
      <Navigation />
    </section>
    <h1 className={styles.title}>{title}</h1>
    {children}
  </div>
);

// {children}
// https://choippo.com/react-component-children/

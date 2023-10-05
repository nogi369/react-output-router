import { Navigation } from "../../molecules/Navigation";
import styles from "./styles.module.css";

export const BaseLayout = ({ children, title }) => (
  <div className={styles.container}>
    <h1 className={styles.title}>{title}</h1>
    <section className={styles.common}>
      <Navigation />
    </section>
    {children}
  </div>
);

// {children}
// https://choippo.com/react-component-children/

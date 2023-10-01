import { Navigation } from "../../molecules/Navigation";

export const BaseLayout = ({ children, title }) => {
  return (
    <div>
      <h1>{title}</h1>
      <section>
        <Navigation />
      </section>
      {children}
    </div>
  );
};

// {children}
// https://choippo.com/react-component-children/

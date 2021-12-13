import classNames from "classnames";

const MyComponent = ({ highlighted, theme }) => {
  <div className={classNames("MyComponent", { highlighted }, theme)}>
    hello!
  </div>;
};

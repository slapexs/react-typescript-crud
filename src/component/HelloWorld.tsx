import { FC, Fragment } from "react";
import { BigText } from "./BigText";
import { TitleText } from "./TitleText";

const name = "Hello World New World";

const sayName = (n?: string): string => {
  if (n) {
    return "This is your " + n;
  } else {
    return "No name here";
  }
};

const element = <div>{sayName(name)}</div>;
const ele2 = <div>{name}</div>;

const HelloWorld: FC = () => {
  return (
    <Fragment>
      {element}
      {ele2}
      <div>{sayName()}</div>
      <BigText text="my-text" />
      <TitleText value="My Title Text" age={10} />
    </Fragment>
  );
};

export default HelloWorld;

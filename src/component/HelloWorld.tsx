import { FC, Fragment } from "react";
import { BigText } from "./BigText";
import { TitleText } from "./TitleText";
import { Parent } from "./Parent";
import Todos from "./Todos";
import { Counter } from "./Counter";
import { ConfirmValue } from "./ConfirmValue";

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
      <ConfirmValue />
    </Fragment>
  );
};

export default HelloWorld;

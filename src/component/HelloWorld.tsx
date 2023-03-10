import { FC, Fragment } from "react";
import { BigText } from "./BigText";
import { TitleText } from "./TitleText";
import { Parent } from "./Parent";
import Todos from "./Todos";
import { Counter } from "./Counter";

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
      <Parent>
        <BigText text="my-text" />
      </Parent>
      <TitleText value="My Title Text" age={10} />
      <Todos todos={["1", "2", "3"]} />
      <Counter />
    </Fragment>
  );
};

export default HelloWorld;

import { FC, Fragment, useRef } from "react";
import { DuckInput } from "./DuckInput";
import { DuckButton } from "./DuckButton";
import { DuckList } from "./DuckList";
import { useDispatch } from "react-redux";
import { addTodo } from "../app/slice/duck-slice";

// const name = "Hello World New World";

// const sayName = (n?: string): string => {
//   if (n) {
//     return "This is your " + n;
//   } else {
//     return "No name here";
//   }
// };

// const element = <div>{sayName(name)}</div>;
// const ele2 = <div>{name}</div>;

const HelloWorld: FC = () => {
  const dispatch = useDispatch();
  const inputEle = useRef<HTMLInputElement>(null);
  const duckClick = () => {
    const name = inputEle.current?.value;
    if (name) {
      dispatch(addTodo(name));
    }
  };

  return (
    <Fragment>
      <DuckInput inputEle={inputEle} />
      <DuckButton btnClick={duckClick} />
      <DuckList />
    </Fragment>
  );
};

export default HelloWorld;

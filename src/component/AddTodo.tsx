import { FC, useReducer, useRef } from "react";

interface TodoModel {
  name: string;
}

interface TodoAction {
  type: string;
  payload: string;
}
const initialState: TodoModel[] = [];

const reducer = (state: TodoModel[], action: TodoAction) => {
  console.log(action.type, action.payload);
  if (action.type === "ADD") {
    return [...state, { name: action.payload }];
  } else {
    return state;
  }
};

const AddTodo: FC = () => {
  const [todos, dispatch] = useReducer(reducer, initialState);
  const inputEle = useRef<HTMLInputElement>(null);
  const btnClick = () => {
    const value = inputEle.current?.value;
    if (value) {
      dispatch({ type: "ADD", payload: value });
    } else {
      console.log("invalid value");
    }
  };
  return (
    <>
      <input ref={inputEle} />
      <button onClick={btnClick}>Add Todo</button>
      <ul>
        {todos.map((model, index) => (
          <li key={index}>
            {model.name} <button>del</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export { AddTodo };

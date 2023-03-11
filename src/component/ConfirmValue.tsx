import { FC, useRef, useState } from "react";

const ConfirmValue: FC = () => {
  const [value, setValue] = useState("");
  const eleRef = useRef<HTMLInputElement>(null);
  const btnClick = () => setValue(eleRef.current?.value ?? "");
  return (
    <>
      <input ref={eleRef} />
      <button onClick={btnClick}>Add</button>
      <h1>{value}</h1>
    </>
  );
};

export { ConfirmValue };

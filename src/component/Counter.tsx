import { FC, Fragment, useState } from "react";

interface Car {
  brand: string;
  model: string;
  year: number;
  color: string;
  price: number;
}

const Counter: FC = () => {
  const [cnt, setCnt] = useState(0);
  const [name, setName] = useState("N/A");
  const [car, setCar] = useState<Car>({
    brand: "Ford",
    model: "Mustang",
    year: 1977,
    color: "red",
    price: 100,
  });
  return (
    <Fragment>
      <h1>{cnt}</h1>
      <button onClick={(e) => setCnt(cnt + 1)}>Add</button>
      <h1>{name}</h1>
      <input onChange={(e) => setName(e.target.value)} />
      <p>{car.brand}</p>
    </Fragment>
  );
};

export { Counter };

import { FC, useState } from "react";

const Home: FC = () => {
  const [users, setUsers] = useState([]);
  const loadData = () => {
    fetch("https://jsonplaceholder.typicode.com/users").then((resp) => {
      resp.json().then((data: []) => {
        setUsers(data);
      });
    });
  };
  return (
    <>
      <button onClick={loadData}>Load</button>
      <table>
        <tbody>
          {users.map((value, index) => {
            return (
              <tr key={index}>
                <td>{value["name"]}</td>
                <td>{value["username"]}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export { Home };

import { FC, useState, useEffect } from "react";

interface GeoModel {
  lat: string;
  lng: string;
}

interface AddressModel {
  street: string;
  geo: GeoModel;
}

interface UserModel {
  name: string;
  username: string;
  address: AddressModel;
}

const Home: FC = () => {
  // hook
  const [users, setUsers] = useState<UserModel[]>([]);
  const [headers, setHeaders] = useState<string[]>(["name", "username"]);
  useEffect(() => {
    loadData();
  }, []);

  // function
  const loadData = () => {
    fetch("https://jsonplaceholder.typicode.com/users").then((resp) => {
      resp.json().then((data: UserModel[]) => {
        setUsers(data);
        if (data.length > 0) {
          const d = data[0];
          const cols: string[] = [];
          for (let k in d) {
            cols.push(k);
          }
          setHeaders(cols);
        }
      });
    });
  };
  return (
    <>
      <button onClick={loadData}>Load</button>
      <table>
        <thead>
          {headers.map((value) => (
            <th>{value}</th>
          ))}
        </thead>
        <tbody>
          {users.map((value, index) => {
            return (
              <tr key={index}>
                <td>{value.name}</td>
                <td>{value.username}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export { Home };

import axios from "axios";
import React from "react";

const UserList = () => {
  const [users, setUsers] = React.useState<any[]>([]);

  const getData = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((respose) => {
        const data = respose.data;
        setUsers(data);
      })
      .catch((e) => {
        console.log("Error" + e);
      });
  };

  React.useEffect(() => {
    getData();
  }, [users]);

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </tbody>
        {users.map((user, index) => {
          return (
            <tr key={index}>
              <td>{user.id}</td>
              <td>{user.title}</td>
              <td>{user.body}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default UserList;

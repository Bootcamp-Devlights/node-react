import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getUsers } from "../../services/users";

export function HomePage() {
  const [users, setUsers] = useState();

  // Obtener datos en el inicio de un component
  useEffect(
    () => {
      // esto se va a ejecutar cuando se monto el component
      async function init() {
        const usersData = await getUsers();

        setUsers(usersData);
      }

      init();

      return () => {
        // esto se va a ejecutar cuando se desmotanta el componente

        console.log("el usuario esta dejando el home")
      };
    },
    [] // array de dependencia vacio para ejecutarlo una solaa vez
  );

  useEffect(() => {
    console.log("el estado de user tuvo un cambio", users);
  }, [users])

  if (users) {
    return (
      <div>
        <ul>
          {users.users.map((user) => (
            <li>
              Name: {user.name} <br />
              Last Name: {user.lastName} <br />
              Email: {user.email} <br />
            </li>
          ))}
        </ul>
        <Link to="/login">Ir a login</Link>
      </div>
    );
  }

  return <div>Loading..</div>;
}

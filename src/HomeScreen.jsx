
import { useContext } from "react";
import { UserContext } from "./UserContext";

function HomeScreen() {

  
  const { user } = useContext(UserContext)
  console.log(user);
  return (
    < >
      <h1>Home sreenc</h1>
      <hr />

      <pre>
        { JSON.stringify(user, null, 3)}
      </pre>
    </>
  );
}

export default HomeScreen;

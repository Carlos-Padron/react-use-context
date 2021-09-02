import React, { useContext } from "react";
import { UserContext } from "./UserContext";

const LoginScreen = () => {
  const { setUser } = useContext(UserContext);

  return (
    <div>
      <h1>Login Screen</h1>
      <hr />
      <button
        onClick={() => {
          setUser({
            id: new Date().getTime(),
            name: "Carlos",
          });
        }}
      >
        Login
      </button>
    </div>
  );
};

export default LoginScreen;

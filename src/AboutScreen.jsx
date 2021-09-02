import React, { useContext } from "react";
import { UserContext } from "./UserContext";

const AboutScreen = () => {
  const { user, setUser } = useContext(UserContext);

  return (
    <div>
      <h1>About Screen</h1>
      <hr />

      <pre>
        <code>{JSON.stringify(user)}</code>
      </pre>

      <button
        onClick={() => {
          setUser({});
        }}
      >
        LogOut
      </button>
    </div>
  );
};

export default AboutScreen;

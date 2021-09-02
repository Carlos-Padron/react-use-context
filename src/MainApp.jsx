import React, { useState } from "react";
import AppRoutes from "./AppRoutes";
import { UserContext } from "./UserContext";

const MainApp = () => {
  const [user, setUser] = useState({});

  return (
    <div>
      <UserContext.Provider
        value={{
          user,
          setUser,
        }}
      >
        <AppRoutes />
      </UserContext.Provider>
    </div>
  );
};

export default MainApp;

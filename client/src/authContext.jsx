import { createContext, useState, useContext } from "react";
import { logIn } from "./api/auth";

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  // console.log(context);
  if (!context) {
    console.log("error");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [activeUser, setActiveUser] = useState(null);
  const [isActive, setActive] = useState(false);
  const userLoged = async (activeUser) => {
    const user = await logIn(activeUser);
    setActive(true);
    return setActiveUser(user.data);
  };

  // const userResponse = await logIn(data)
  return (
    <AuthContext.Provider
      value={{
        userLoged,
        activeUser,
        isActive,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

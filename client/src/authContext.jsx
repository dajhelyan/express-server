import { createContext, useState, useContext, useEffect } from "react";
import { logIn } from "./api/auth";

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  console.log(context, 'context');
  if (!context) {
    console.log("error");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [activeUser, setActiveUser] = useState(null);
  const [isActive, setActive] = useState(false);
  const [isLoading, setLoading] = useState(true)
  // const [token, setToken] = useState()

  const userLoged = async (activeUser) => {
    try {
      const user = await logIn(activeUser);
      console.log(user, 'user');
      setActive(true);
      localStorage.setItem('token', user.data.userToken)
      setActiveUser(user.data);
      setLoading(false)
    } catch (error) {
      return error;
    }
  };
  
  useEffect(() => {
    // check token
    const curToken = localStorage.getItem('token')
      if (curToken) {
        console.log(curToken, 'cur');
        setActive(true)
        setActiveUser(true)
        setLoading(false)
      }
      
  }, [])

  // const userResponse = await logIn(data)
  return (
    <AuthContext.Provider
      value={{
        userLoged,
        activeUser,
        isActive,
        isLoading
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

import axios, { AxiosHeaders } from "axios";
import { useAuth } from "../authContext";

export const API = "http://localhost:3000/api";
// const { activeUser } = useAuth();

// const headers = axios.create({
//   headers: {
//     "Content-Type": "application/x-www-form-urlencoded",
//     Accept: "application/json",
//     Authorization: `Bearer ${localStorage.getItem("token")}`,
//     rossDomain: true,
//   },
// });

// headers.interceptors.request.use(async(config) => {
//   const value = await localStorage.getItem("token");
//   if (value !== null) {
//     config.defaults.headers.common["Authorization"] = `Bearer ${value}`;
//   }

//   return config;

// });

export const logIn = (user) => {
  console.log(user);
  return axios.post(`${API}/login`, user);
};

export const validateToken = (token) => {
  console.log(token, "token");
  return axios.post(`${API}/verify`, token);
};

export const addOrder = async (order) => {
  try {
    await axios.post(`${API}/orders`, order, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        crossDomain: true,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export const getOrders = async () => {
  try {
    await axios.get(`${API}/orders`, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        crossDomain: true,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

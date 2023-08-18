import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
  redirect,
} from "react-router-dom";
import "./App.css";
import { LoginForm } from "./pages/login-form";
import { OrderForm } from "./components/order-form";
import { AuthProvider, useAuth } from "./authContext";
import { Dashboard } from "./pages/dashboard";
import { useNavigate } from 'react-router-dom';

function ProtectedRoute() {
  const { activeUser, isActive, isLoading } = useAuth();
  
  const navigate = useNavigate()

  // console.log(isActive, "active?");
  if (!isActive && isLoading) {
    return navigate('/login', redirect)
  }
  return <Outlet context={isActive} />;
}

function PublicRoute() {
  const navigate = useNavigate()
  const {isActive, isLoading} = useAuth()

 return isActive && !isLoading ? navigate('/' , redirect) : <Outlet context={isActive}/> 
}

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route element={<PublicRoute/>}>
            <Route path="/login" element={<LoginForm/>}></Route>
          </Route>
          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<Dashboard />}></Route>
            <Route path="/order" element={<OrderForm/>}></Route>
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;

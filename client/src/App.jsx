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
import { OrderForm } from "./pages/order-form";
import { AuthProvider, useAuth } from "./authContext";

function ProtectedRoute(params) {
  const { user, isAuthenticated } = useAuth();
  if (!isAuthenticated) {
    return <Navigate to={"/login"} replace />;
  }
  return <Outlet />;
}

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<LoginForm />}></Route>
          <Route path="/login" element={<LoginForm />}></Route>
          <Route path="/orders" element={<h1>order page</h1>}></Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;

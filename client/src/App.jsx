import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';import './App.css'
import { LoginForm } from './pages/login-form';
import { OrderForm } from './pages/order-form';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<OrderForm/>}></Route>
        <Route path="/login" element={<h1>login page</h1>}></Route>
        <Route path="/orders" element={<h1>order page</h1>}></Route>
      </Routes>
    </Router>
  )
}

export default App

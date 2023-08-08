import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<h1>Initial page</h1>}></Route>
        <Route path="/login" element={<h1>login page</h1>}></Route>
        <Route path="/orders" element={<h1>order page</h1>}></Route>
      </Routes>
    </Router>
  )
}

export default App

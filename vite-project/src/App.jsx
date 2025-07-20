import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ProductPage from './components/ProductPage'
import PaymentForm from './components/PaymentForm'
import Home from './pages/Home'
import PlaceOrder from './pages/PlaceOrder'
import PaymentSuccess from './pages/PaymentSuccess'
import PaymentFailed from './pages/PaymentFailed'
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/payment" element={<PlaceOrder/>} />
        <Route path="/orders" element={<PaymentSuccess/>} />
        <Route path="/fail" element={<PaymentFailed/>} />
      </Routes>
    </Router>
  )
}

export default App
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Home from "./pages/home"
import Layout from './layout';
import { Contact, Register } from './pages/form';
import Pricing from "./pages/pricing"
import Service from "./pages/service"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/register" element={<Register />} />
          <Route path="/service" element={<Service />} />
        </Route>
      </Routes>
      <ToastContainer position="top-right" autoClose={2500} hideProgressBar={true} newestOnTop closeOnClick pauseOnFocusLoss draggable pauseOnHover />
    </Router>
  )
}

export default App
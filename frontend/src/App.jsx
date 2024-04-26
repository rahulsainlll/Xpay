import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pagess/Home";
import Signup from "./pagess/Signup";
import Signin from "./pagess/Signin";
import Dashboard from "./pagess/Dashboard";
import SendMoney from "./pagess/SendMoney";
import "./App.css";

import axios from "axios";
import { Toaster } from "react-hot-toast";

// Axios
axios.defaults.baseURL = "https://xpay-backend.onrender.com";
axios.defaults.withCredentials = true;

function App() {
  return (
    <>
      <BrowserRouter>
        <Toaster position="top-center" toastOptions={{ duration: 2000 }} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/send" element={<SendMoney />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

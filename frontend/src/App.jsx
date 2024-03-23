import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pagess/Home";
import Signup from "./pagess/Signup";
import Signin from "./pagess/Signin";
import Dashboard from "./pagess/Dashboard";
import SendMoney from "./pagess/SendMoney";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
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

{
  /* <div className="bg-gray-100 p-10 min-h-screen">
      <div className="container mx-auto bg-white rounded shadow-lg p-6">
        <header className="flex justify-between items-center p-4">
          <h1 className="text-xl font-bold">Payments App</h1>
          <div>
            <span>Hello, User </span>
            <button className="bg-gray-200 rounded-full w-8 h-8 ml-2">U</button>
          </div>
        </header>
        <div className="my-4">
          <div className="border-b pb-4">
            <h2 className="text-lg font-semibold">Your Balance</h2>
            <p className="text-xl">$5000</p>
          </div>
          <div className="my-6">
            <h3 className="text-lg font-semibold mb-3">Users</h3>
            <input
              className="px-3 py-2 border rounded w-full mb-4"
              placeholder="Search users..."
            />
            <ul>
              {[1, 2, 3].map((user) => (
                <li
                  key={user}
                  className="flex items-center justify-between mb-3"
                >
                  <div className="flex items-center">
                    <div className="bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center mr-3">
                      U{user}
                    </div>
                    <span>User {user}</span>
                  </div>
                  <button className="bg-black text-white px-4 py-2 rounded">
                    Send Money
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div> */
}

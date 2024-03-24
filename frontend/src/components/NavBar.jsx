import Logo from "../assets/logo.png";
import DP from "../assets/favicon.png";
import { removeToken, getToken } from "../../utilis/tokenManagement";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function NavBar() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!getToken()) {
      navigate("/signin");
      toast.error(" You are not logged in.");
    }
  }, [navigate]);

  const handleLogout = () => {
    removeToken();
    toast.success("Logout Succesfully.");
    navigate("/signin");
  };

  return (
    <nav className="border-b border-gray-300 p-4 flex justify-between items-center">
      <div className="flex items-center">
        {/* <img src={Logo} alt="Xpay Logo" className="w-14 h-14" /> */}
        <h1 className="text-2xl ">Xpay</h1>
      </div>

      <div className="user-info flex items-center">
        <span className="mr-2">Hello, User!</span>
        <img src={DP} alt="User Profile" className="w-11 h-11 rounded-full" />

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="  p-2 rounded-md ml-4 ring-1 ring-inset ring-gray-300 px-2.5 py-1.5 text-base shadow-sm  hover:bg-gray-100"
        >
          Logout
        </button>
      </div>
    </nav>
  );
}

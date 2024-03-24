import Logo from "../assets/logo.png";
import DP from "../assets/favicon.png";

export default function NavBar() {
  return (
    <nav className="border-b border-gray-300 p-4 flex justify-between items-center">
      <div className="flex items-center">
        <img src={Logo} alt="Xpay Logo" className="w-14 h-14" />
        <h1 className="text-xl font-bold">Xpay</h1>
      </div>

      <div className="user-info flex items-center">
        <span className="mr-2">Hello, User!</span>

        <img src={DP} alt="User Profile" className="w-11 h-11 rounded-full" />
      </div>
    </nav>
  );
}

import React, { useEffect, useState } from "react";
import { setToken, getToken } from "../../utilis/tokenManagement";
import axios from "axios";
import { toast } from "react-hot-toast";

export default function Balance() {
  const [balance, setBalance] = useState(null);

  useEffect(() => {
    const token = getToken();
    if (token) {
      setToken(token);
    }
  }, []);

  const fetchBalance = async () => {
    try {
      const { data } = await axios.get("/api/v1/account/balance");
      if (data.error) {
        toast.error(data.error);
      } else {
        setBalance(data.balance);
      }
    } catch (error) {
      toast.error("An error occurred while fetching the balance.");
      console.error("Frontend Balance error:", error);
      // setBalance(null);
    }
  };

  useEffect(() => {
    fetchBalance();
  }, []); // Empty array ensures this only runs once on component mount

  return (
    <div className="p-4 flex gap-5">
      <div className="bg-white rounded-lg border border-gray-200 shadow-md p-6 w-full max-w-xs">
        <h5 className="text-gray-500 text-xs uppercase">Account Balance</h5>
        <p className="text-2xl font-semibold">
          {balance !== null ? `₹${balance}` : "Loading..."}
        </p>
      </div>
    </div>
  );
}

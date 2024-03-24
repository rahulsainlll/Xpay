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

  const currBalance = async () => {
    try {
      const { data } = await axios.get("/api/v1/account/balance");

      if (data.error) {
        toast.error(data.error);
        setBalance("");
      } else {
        setBalance(data.balance);
      }
    } catch (error) {
      console.error("Frontend Balance error:", error);
      setBalance("");
    }
  };

  useEffect(() => {
    currBalance();
  }, [balance]);

  return (
    <div className="p-4">
      {balance !== null
        ? `Your balance is Rs. ${balance}`
        : "Balance featching error"}
    </div>
  );
}

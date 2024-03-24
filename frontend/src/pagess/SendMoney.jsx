import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";


export default function SendMoney() {
  const navigate = useNavigate();
  const [amount, setAmount] = useState("");
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const name = searchParams.get("name");

  const handleSendMoney = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post("/api/v1/account/transfer", {
        to: id,
        amount: amount,
      });
      if (data.error) {
        toast.error(data.error);
       
      } else {
        toast.success("Payment Successful");
         navigate("/dashboard");
      }
    } catch (error) {
      toast.error("An error occurred while fetching the balance.");
      console.error("Frontend Balance error:", error);
     
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white rounded-xl shadow-lg p-6 max-w-md w-full mx-4">
        <div className="flex items-center mb-4">
          <div className="flex-shrink-0 mr-3">
            <div className="bg-green-500 text-white rounded-full w-10 h-10 flex items-center justify-center text-2xl font-semibold">
              A
            </div>
          </div>
          <div className="flex-grow">
            <p className="text-gray-900 font-semibold">{name}</p>
          </div>
        </div>
        <form onSubmit={handleSendMoney}>
          <label
            htmlFor="amount"
            className="text-sm font-medium text-gray-700 block mb-2"
          >
            Amount (in Rs)
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount"
            className="border-gray-300 focus:border-green-500 focus:ring focus:ring-green-200 rounded-md shadow-sm block w-full mb-4 p-2"
          />
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md transition duration-300"
          >
            Initiate Transfer
          </button>
        </form>
      </div>
    </div>
  );
}

import { useEffect, useState } from "react";
import axios from "axios";

export default function Balance() {
  const [balance, setBalance] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("/api/v1/account/balance")
      .then((response) => {
        setBalance(response.data.balance);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching balance:", error);
        setLoading(false);
      });
  }, [balance, loading]);

  return (
    <div className="bg-white shadow-md rounded px-6 py-4">
      <h2 className="text-lg font-semibold mb-2">Balance Overview</h2>
      {loading ? (
        <p className="text-gray-600">Loading balance...</p>
      ) : (
        <>
          {balance !== null ? (
            <p className="text-gray-800">
              Your balance is{" "}
              <span className="font-bold text-green-600">Rs. {balance}</span>
            </p>
          ) : (
            <p className="text-red-600">
              Failed to fetch balance. Please try again later.
            </p>
          )}
        </>
      )}
    </div>
  );
}

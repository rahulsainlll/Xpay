import React, { useEffect, useState } from "react";

export default function Users() {
  const [searchQuery, setSearchQuery] = useState("");

  //   useEffect(() => {
  //     axios
  //       .get("/api/v1/user/bulk"+searchQuery)
  //       .then((response) => {
  //         // setBalance(response.data.);
  //         setLoading(false);
  //       })
  //       .catch((error) => {
  //         console.error("Error fetching balance:", error);
  //         setLoading(false);
  //       });
  //   }, [searchQuery]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Users</h1>
      <div className="mb-4">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
          }}
          placeholder="Search users..."
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>
    </div>
  );
}

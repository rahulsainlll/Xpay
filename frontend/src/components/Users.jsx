import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import axios from "axios";
import User from "./User";

export default function Users() {
  const [searchQuery, setSearchQuery] = useState("");
  const [users, setUsers] = useState([]);

  const queryUrl = `/api/v1/user/bulk${
    searchQuery ? `?filter=${searchQuery}` : ""
  }`;

  useEffect(() => {
    axios
      .get(queryUrl)
      .then((response) => {
        setUsers(response.data.user);
        console.log(response.data.user);
      })
      .catch((error) => {
        toast.error("Error fetching users");
        console.error("Error fetching users:", error);
      });
  }, [searchQuery]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Users</h1>
      <div className="mb-4">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search users..."
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>

      <div>
        <User users={users} />
      </div>
    </div>
  );
}

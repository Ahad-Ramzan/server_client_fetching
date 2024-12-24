"use client";
import { useState, useEffect } from "react";
type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
};

const UsersPage = () => {
  const [users, setUsers] = useState<User[]>([]);

  // Fetch data from the API
  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      setUsers(data);
    };

    fetchUsers();
  }, []);

  // Handle delete functionality
  const handleDelete = (id: number) => {
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers); // Update the state
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Users List
      </h1>
      {users.length > 0 ? (
        <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {users.map((user) => (
            <li
              key={user.id}
              className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition duration-300"
            >
              <h2 className="text-xl font-semibold text-gray-700">
                {user.name}
              </h2>
              <p className="text-gray-500 text-sm">@{user.username}</p>
              <p className="text-gray-600 mt-2">
                <span className="font-medium">Email:</span> {user.email}
              </p>
              <p className="text-gray-600 mt-1">
                <span className="font-medium">Phone:</span> {user.phone}
              </p>
              <button
                onClick={() => handleDelete(user.id)}
                className="mt-4 text-red-500 hover:text-red-700 transition duration-300"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center text-gray-500">No users available.</p>
      )}
    </div>
  );
};

export default UsersPage;

"use client";

import { useState } from "react";

type User = {
  id: number;
  name: string;
  email: string;
};

type UserListProps = {
  initialUsers: User[];
};

export const UserList: React.FC<UserListProps> = ({ initialUsers }) => {
  const [users, setUsers] = useState(initialUsers);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [editingUserId, setEditingUserId] = useState<number | null>(null);
  const [editingName, setEditingName] = useState("");
  const [editingEmail, setEditingEmail] = useState("");

  const handleDelete = (id: number) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const handleUpdate = (id: number) => {
    setUsers(
      users.map((user) =>
        user.id === id
          ? { ...user, name: editingName, email: editingEmail }
          : user
      )
    );
    setEditingUserId(null); // Exit editing mode
    setEditingName("");
    setEditingEmail("");
  };

  return (
    <>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Type user name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mr-2 text-white bg-black border rounded-lg p-4 shadow hover:shadow-lg mb-3 "
        />
        <input
          type="email"
          placeholder="Type user email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mr-2 text-white bg-black border rounded-lg p-4 shadow hover:shadow-lg "
        />
        <button
          onClick={() => setUsers([{ id: Date.now(), name, email }, ...users])}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Add user
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 ">
        {users.map((user) => (
          <div
            key={user.id}
            className="border rounded-lg p-4 shadow hover:shadow-xl transition-all ease-in-out duration-300 transform hover:scale-110"
          >
            {editingUserId === user.id ? (
              <div>
                <input
                  type="text"
                  value={editingName}
                  onChange={(e) => setEditingName(e.target.value)}
                  placeholder="Edit name"
                  className="block w-full text-black border rounded-lg p-2 mb-2"
                />
                <input
                  type="email"
                  value={editingEmail}
                  onChange={(e) => setEditingEmail(e.target.value)}
                  placeholder="Edit email"
                  className="block w-full text-black border rounded-lg p-2 mb-2"
                />
                <button
                  onClick={() => handleUpdate(user.id)}
                  className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 mr-2"
                >
                  Save
                </button>
                <button
                  onClick={() => setEditingUserId(null)}
                  className="bg-gray-500 text-black py-2 px-4 rounded hover:bg-gray-600"
                >
                  Cancel
                </button>
              </div>
            ) : (
              <div>
                <h2 className="font-bold text-lg">{user.name}</h2>
                <p className="text-sm text-gray-600">{user.email}</p>
                <button
                  onClick={() => {
                    setEditingUserId(user.id);
                    setEditingName(user.name);
                    setEditingEmail(user.email);
                  }}
                  className="mt-4 bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600 mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(user.id)}
                  className="mt-4 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            )}
          </div>
        ))}
        {users.length === 0 && (
          <p className="col-span-full text-center text-gray-500">
            No users available.
          </p>
        )}
      </div>
    </>
  );
};

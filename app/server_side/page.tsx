import { UserList } from "../components/UserList";

export default async function UsersPage() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">User List</h1>
      <UserList initialUsers={users} />
    </div>
  );
}

import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Hello, Coder!</h1>
        <p className="text-gray-600 text-lg mb-8">
          Navigate to explore server-side and client-side rendering.
        </p>
      </div>
      <div className="flex space-x-4">
        <Link
          href="/server_side"
          className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
        >
          Server Side
        </Link>
        <Link
          href="/client_side"
          className="px-6 py-3 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition duration-300"
        >
          Client Side
        </Link>
      </div>
    </div>
  );
}

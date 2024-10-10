// components/MainLayout.tsx
import { Sidebar } from "./Sidebar";
import PostList from "../post/PostList";

export const MainLayout = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Top Bar */}
        <div className="flex items-center space-x-4 mb-6">
          <input
            type="text"
            placeholder="Search"
            className="flex-1 p-2 border rounded-md focus:outline-none focus:border-gray-400"
          />
          <div className="relative">
            <button className="flex items-center px-4 py-2 border rounded-md bg-gray-50 text-gray-700">
              Community ▼
            </button>
          </div>
          <button className="px-4 py-2 bg-green-300 text-white rounded-md">
            Create +
          </button>
        </div>
        <PostList />
      </main>
    </div>
  );
};

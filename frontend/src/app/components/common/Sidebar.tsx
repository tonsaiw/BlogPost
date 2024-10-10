import Link from "next/link";

export const Sidebar = () => {
  return (
    <aside className="w-1/5 bg-gray-200 p-4">
      <nav className="space-y-4">
        <Link
          href="/"
          className="flex items-center space-x-2 text-gray-700 hover:text-gray-900"
        >
          <span>🏠</span>
          <span>Home</span>
        </Link>
        <Link
          href="/blog"
          className="flex items-center space-x-2 text-gray-700 hover:text-gray-900"
        >
          <span>✏️</span>
          <span>Our Blog</span>
        </Link>
      </nav>
    </aside>
  );
};

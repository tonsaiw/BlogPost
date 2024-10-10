import Link from "next/link";

export const Header = () => {
  return (
    <header className="bg-green-500 p-4 flex justify-between items-center">
      <h1 className="text-white text-xl">a Board</h1>
      <Link href="/signin">
        <button className="bg-green-300 text-white px-4 py-2 rounded">
          Sign In
        </button>
      </Link>
    </header>
  );
};

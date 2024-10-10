import { Header } from "../components/common/Header";
import { Sidebar } from "../components/common/Sidebar";
const BlogPage = () => {
  return (
    <div>
      <Header />
      <div className="flex h-screen bg-gray-100">
        <Sidebar />
        <h1>Blog Page</h1>
      </div>
    </div>
  );
};

export default BlogPage;

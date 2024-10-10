"use client";

import React from "react";
import { PostItem } from "./PostItem";
import { useQuery } from "@tanstack/react-query";
import { Post } from "../../types/PostTypes";
import apiClient from "@/app/lib/axios";

const fetchPosts = async (): Promise<Post[]> => {
  const response = await apiClient.get("/posts");
  return response.data;
};

export const PostList = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;
  console.log(data);
  return (
    <div>
      {data?.map((d: Post) => (
        <PostItem key={d._id} post={d} />
      ))}
    </div>
  );
};

// components/PostList.js
// const posts = [
//   {
//     id: 1,
//     author: "Wittawat",
//     category: "History",
//     title: "The Beginning of the End of the World",
//     description:
//       "The afterlife sitcom The Good Place comes to its culmination...",
//     comments: 32,
//   },
//   {
//     id: 2,
//     author: "Zach",
//     category: "History",
//     title: "The Big Short War",
//     description:
//       "Tall, athletic, handsome with cerulean eyes, he was the kind of hyper-ambitious kid...",
//     comments: 4,
//   },
//   {
//     id: 3,
//     author: "Nicholas",
//     category: "Exercise",
//     title: "The Mental Health Benefits of Exercise",
//     description:
//       "You already know that exercise is good for your body. But did you know it can also...",
//     comments: 32,
//   },
//   // Add more posts as needed
// ];

// export default function PostList() {
//   return (
//     <div className="space-y-4">
//       {posts.map((post) => (
//         <div key={post.id} className="bg-white p-4 rounded-lg shadow">
//           <div className="flex items-center mb-2 space-x-2">
//             <span className="font-semibold">{post.author}</span>
//             <span className="text-xs bg-gray-200 px-2 py-1 rounded">
//               {post.category}
//             </span>
//           </div>
//           <h3 className="text-lg font-bold">{post.title}</h3>
//           <p className="text-gray-700 text-sm">{post.description}</p>
//           <div className="text-gray-500 text-sm mt-2">
//             {post.comments} Comments
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

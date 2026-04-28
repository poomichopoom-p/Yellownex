import StartPost from "../Components/StartPost.jsx";

import { postsData } from "../data/mockData.js";

import PostFeed from "../Components/03_PostFeed.jsx";

export default function Home() {
  return (
    <div className="space-y-4 flex justify-center">
      {/* Start Post */}
      <StartPost />

      {/* Posts Feed - ใช้ข้อมูลจาก mockData */}
      {postsData.map((post) => (
        <PostFeed key={post.id} post={post} />
      ))}
      {/* Posts Feed */}
      <PostFeed />
    </div>
  );
}

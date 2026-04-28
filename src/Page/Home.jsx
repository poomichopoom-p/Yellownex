import StartPost from "../Components/StartPost.jsx";
import Post01 from "../Components/01_PostCard.jsx";
import { postsData } from "../data/mockData.js";

export default function Home() {
  return (
    <div className="space-y-4 flex justify-center">
      {/* Start Post */}
      <StartPost />

      {/* Posts Feed - ใช้ข้อมูลจาก mockData */}
      {postsData.map((post) => (
        <Post01 key={post.id} post={post} />
      ))}
    </div>
  );
}

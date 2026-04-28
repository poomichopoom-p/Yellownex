import PostCard from "./01_PostCard";
import { postsData } from "../mockData.js/postsData";

const PostFeed = () => (
  <div className="feed">
    {postsData.map((post) => (
      <PostCard key={post.id} post={post} />
    ))}
  </div>
);
export default PostFeed;

// PostCard.jsx
import { useState } from "react";
import CommentSection from "./02_CommentSection.jsx";

const PostCard = ({ post }) => {
  const [liked, setLiked] = useState(post.isLiked);
  const [likeCount, setLikeCount] = useState(post.likeCount);
  const [showComments, setShowComments] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const handleLike = () => {
    setLiked((prev) => !prev);
    setLikeCount((prev) => (liked ? prev - 1 : prev + 1));
  };

  const isLong = post.content.length > 200;
  const displayContent =
    !expanded && isLong ? post.content.slice(0, 200) + "..." : post.content;

  return (
    <div className="bg-[#1a1a1a] rounded-xl border border-gray-800 mb-2 shadow-sm">
      {/* Header */}
      <div className="flex items-start justify-between p-3">
        <div className="flex gap-2">
          <img
            src={post.author.avatar}
            alt={post.author.name}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div className="flex flex-col">
            <h3 className="text-sm font-semibold text-white hover:text-blue-400 hover:underline cursor-pointer">
              {post.author.name}
            </h3>
            <p className="text-xs text-gray-400">{post.author.headline}</p>
            <span className="text-xs text-gray-500">{post.createdAt} · 🌐</span>
          </div>
        </div>
        <button className="text-gray-400 hover:bg-gray-800 p-1.5 rounded-full transition-colors">
          <svg viewBox="0 0 24 24" width="24" height="24">
            <path fill="currentColor" d="M14 12a2 2 0 11-2-2 2 2 0 012 2zM4 12a2 2 0 11-2-2 2 2 0 012 2zm10 0a2 2 0 11-2-2 2 2 0 012 2z"></path>
          </svg>
        </button>
      </div>

      {/* Body */}
      <div className="px-3 pb-2">
        <p className="text-sm text-gray-200 leading-normal whitespace-pre-wrap">
          {displayContent}
        </p>
        {isLong && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-gray-400 text-sm font-semibold hover:text-blue-400 hover:underline mt-1"
          >
            {expanded ? "ย่อ" : "...ดูเพิ่มเติม"}
          </button>
        )}
      </div>

      {/* Image (optional) */}
      {post.image && (
        <div className="mt-2 bg-[#121212] flex justify-center border-y border-gray-800">
          <img src={post.image} alt="post" className="max-h-[500px] w-full object-contain" />
        </div>
      )}

      {/* Reaction Summary */}
      <div className="px-3 py-2 flex justify-between items-center border-b border-gray-800 mx-3">
        <div className="flex items-center gap-1">
          <div className="flex -space-x-1">
            <span className="bg-blue-600 text-white rounded-full w-4 h-4 flex items-center justify-center text-[10px] border border-[#1a1a1a]">👍</span>
            <span className="bg-red-600 text-white rounded-full w-4 h-4 flex items-center justify-center text-[10px] border border-[#1a1a1a]">❤️</span>
          </div>
          <span className="text-xs text-gray-400">{likeCount}</span>
        </div>
        <button 
          onClick={() => setShowComments(!showComments)}
          className="text-xs text-gray-400 hover:text-blue-400 hover:underline"
        >
          {post.commentCount} ความคิดเห็น
        </button>
      </div>

      {/* Action Bar */}
      <div className="px-3 py-1 flex justify-between gap-1">
        <button 
          onClick={handleLike} 
          className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-md transition-colors ${
            liked ? "text-blue-400 font-semibold" : "text-gray-400 hover:bg-gray-800"
          }`}
        >
          <span className="text-xl">{liked ? "👍" : "👍"}</span>
          <span className="text-sm">ถูกใจ</span>
        </button>
        <button 
          onClick={() => setShowComments(!showComments)} 
          className="flex-1 flex items-center justify-center gap-2 py-2.5 text-gray-400 hover:bg-gray-800 rounded-md transition-colors"
        >
          <span className="text-xl">💬</span>
          <span className="text-sm">แสดงความคิดเห็น</span>
        </button>
        <button className="flex-1 flex items-center justify-center gap-2 py-2.5 text-gray-400 hover:bg-gray-800 rounded-md transition-colors">
          <span className="text-xl">🔁</span>
          <span className="text-sm">แชร์</span>
        </button>
      </div>

      {/* Comments Section */}
      {showComments && (
        <div className="px-3 pb-3">
          <CommentSection postId={post.id} comments={post.comments} />
        </div>
      )}
    </div>
  );
};
export default PostCard;

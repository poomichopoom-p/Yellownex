import { Outlet, Link } from "react-router-dom";
import SideBar from "./SideBar.jsx";
import ChatBar from "./ChatBar.jsx";
import SuggestedPeople from "./SuggestedPeople.jsx";
import { useState } from "react";
import { contactsData } from "../data/mockData.js";

export default function Layout() {
  const [activeChats, setActiveChats] = useState([]);
  const [chatHistories, setChatHistories] = useState({
    1: [{ text: "สวัสดีครับฟง! มีโปรเจกต์ใหม่มาแนะนำ", type: "inbound" }],
    2: [{ text: "See you later!", type: "inbound" }],
  });

  // ใช้ข้อมูลจาก mockData
  const contacts = contactsData;

  const openChat = (user) => {
    if (!activeChats.find((c) => c.id === user.id)) {
      setActiveChats([...activeChats, user]);
    }
  };

  const closeChat = (id) => {
    setActiveChats(activeChats.filter((c) => c.id !== id));
  };

  const handleSendMessage = (userId, text) => {
    if (!text.trim()) return;
    setChatHistories((prev) => ({
      ...prev,
      [userId]: [...(prev[userId] || []), { text: text, type: "outbound" }],
    }));
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Navigation Bar */}
      <nav className="bg-[#1a1a1a] border-b border-gray-800 sticky top-0 z-50 shadow-md">
        <div className="max-w-[1128px] mx-auto px-4 flex justify-between items-center h-[52px]">
          <div className="flex items-center gap-2 flex-1">
            <Link to="/" className="text-white hover:opacity-90">
              <svg viewBox="0 0 24 24" width="34" height="34" fill="currentColor">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zM9.5 17.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM15 17.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM9.5 8.5c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM15 8.5c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
              </svg>
            </Link>
            <div className="relative group">
              <input
                type="text"
                placeholder="ค้นหา"
                className="bg-[#333333] text-white rounded-md px-4 py-1.5 w-64 text-sm focus:w-80 transition-all outline-none border border-transparent focus:border-gray-600"
              />
            </div>
          </div>
          <div className="flex items-center gap-8 h-full">
            <Link to="/" className="flex flex-col items-center text-gray-400 hover:text-white transition-colors text-xs border-b-2 border-white h-full justify-center px-2">
              <span className="text-xl">🏠</span>
              <span className="hidden md:block">หน้าหลัก</span>
            </Link>
            <Link to="/network" className="flex flex-col items-center text-gray-400 hover:text-white transition-colors text-xs h-full justify-center px-2">
              <span className="text-xl">👥</span>
              <span className="hidden md:block">เครือข่าย</span>
            </Link>
            <Link to="/messages" className="flex flex-col items-center text-gray-400 hover:text-white transition-colors text-xs h-full justify-center px-2">
              <span className="text-xl">💬</span>
              <span className="hidden md:block">ข้อความ</span>
            </Link>
            <Link to="/profile" className="flex flex-col items-center text-gray-400 hover:text-white transition-colors text-xs h-full justify-center px-2">
              <span className="text-xl">👤</span>
              <span className="hidden md:block">โปรไฟล์</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-[1128px] mx-auto py-6 px-4">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar - Left */}
          <div className="w-full md:w-[225px] flex-shrink-0">
            <SideBar />
          </div>

          {/* Main Content Area */}
          <div className="flex-1 min-w-0">
            <Outlet />
          </div>

          {/* Sidebar - Right (Suggested People) */}
          <div className="hidden lg:block w-[300px] flex-shrink-0">
            <SuggestedPeople />
          </div>
        </div>
      </div>

      {/* Messaging System */}
      <div className="fixed bottom-0 right-5 flex items-end gap-3 z-50">
        {activeChats.map((chat) => (
          <div key={chat.id} className="w-72 h-[400px] bg-[#1a1a1a] border border-gray-800 rounded-t-lg shadow-2xl flex flex-col">
            <div className="flex justify-between items-center px-3 py-2 border-b border-gray-800 bg-[#1a1a1a] rounded-t-lg">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="font-semibold text-sm text-white truncate max-w-[150px]">
                  {chat.name}
                </span>
              </div>
              <div className="flex gap-2">
                <button className="text-gray-400 hover:bg-gray-800 p-1 rounded transition-colors text-xs">━</button>
                <button className="text-gray-400 hover:bg-gray-800 p-1 rounded transition-colors text-xs" onClick={() => closeChat(chat.id)}>✕</button>
              </div>
            </div>
            <div className="flex-1 p-3 overflow-y-auto flex flex-col gap-2 bg-[#121212]">
              {chatHistories[chat.id]?.map((msg, index) => (
                <div 
                  key={index} 
                  className={`max-w-[85%] p-2 rounded-lg text-xs leading-normal ${
                    msg.type === "inbound" 
                      ? "bg-[#2a2a2a] text-gray-200 self-start border border-gray-700" 
                      : "bg-blue-600 text-white self-end"
                  }`}
                >
                  {msg.text}
                </div>
              ))}
            </div>
            <div className="p-2 border-t border-gray-800 bg-[#1a1a1a]">
              <input
                type="text"
                placeholder="ส่งข้อความ..."
                className="w-full text-xs bg-[#333333] border border-transparent focus:border-gray-600 rounded px-3 py-2 outline-none text-white"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleSendMessage(chat.id, e.target.value);
                    e.target.value = "";
                  }
                }}
              />
            </div>
          </div>
        ))}
        <ChatBar contacts={contacts} onUserClick={openChat} />
      </div>

    </div>
  );
}

import { useState } from "react";

const ChatBar = ({ contacts, onUserClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`w-72 bg-[#1a1a1a] border border-gray-800 rounded-t-lg shadow-2xl flex flex-col transition-all duration-300 ${isOpen ? 'h-[400px]' : 'h-12'}`}>
      <div 
        className="flex justify-between items-center px-3 h-12 border-b border-gray-800 bg-[#1a1a1a] rounded-t-lg cursor-pointer hover:bg-gray-800 transition-colors" 
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-2">
          <div className="relative">
            <div className="w-8 h-8 bg-blue-900/50 rounded-full flex items-center justify-center">
              <span className="text-blue-400 text-xs">💬</span>
            </div>
            <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 border-2 border-[#1a1a1a] rounded-full"></div>
          </div>
          <span className="font-semibold text-sm text-white">Messaging</span>
        </div>
        <div className="flex items-center gap-2">
          <button className="text-gray-400 hover:bg-gray-700 p-1 rounded transition-colors text-xs">···</button>
          <span className="text-gray-400 text-xs transition-transform duration-300" style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
            ▲
          </span>
        </div>
      </div>

      {isOpen && (
        <div className="flex-1 flex flex-col overflow-hidden bg-[#1a1a1a]">
          <div className="p-2 border-b border-gray-800">
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-xs">🔍</span>
              <input 
                type="text" 
                placeholder="Search messages" 
                className="w-full bg-[#121212] border border-transparent focus:bg-[#222] focus:border-gray-700 rounded px-8 py-1.5 text-xs text-white outline-none transition-all placeholder-gray-600"
              />
            </div>
          </div>
          <div className="flex-1 overflow-y-auto bg-[#121212]">
            {contacts.map((user) => (
              <div
                key={user.id}
                className="flex items-center gap-3 p-3 hover:bg-[#222] cursor-pointer border-b border-gray-800/50 transition-colors"
                onClick={() => onUserClick(user)}
              >
                <div className="relative flex-shrink-0">
                  <img
                    src={user.avatar || "https://via.placeholder.com/40"}
                    alt={user.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  {user.online && (
                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-[#1a1a1a] rounded-full"></div>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-center mb-0.5">
                    <span className="font-semibold text-sm text-gray-200 truncate">{user.name}</span>
                    <span className="text-[10px] text-gray-500">{user.lastTime}</span>
                  </div>
                  <div className="text-xs text-gray-500 truncate">{user.lastMsg}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBar;

import { useState } from "react";
import { suggestedPeopleData } from "../data/mockData.js";

export default function SuggestedPeople() {
  const [followed, setFollowed] = useState({});

  // ใช้ข้อมูลจาก mockData
  const suggestions = suggestedPeopleData;

  const toggleFollow = (id) => {
    setFollowed((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="bg-[#1a1a1a] rounded-xl border border-gray-800 p-4 w-full">
      <h2 className="text-sm font-semibold text-gray-200 mb-3">
        เพิ่มไปยังฟีดของคุณ
      </h2>

      <ul className="flex flex-col gap-3">
        {suggestions.map((person) => (
          <li key={person.id} className="flex items-center gap-3">
            <img
              src={person.image}
              alt={person.firstName}
              className="w-10 h-10 rounded-full object-cover flex-shrink-0"
            />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-white truncate">
                {person.firstName} {person.lastName}
              </p>
              <p className="text-xs text-gray-400 truncate">{person.role}</p>
              <p className="text-xs text-gray-500 truncate">{person.company}</p>
            </div>
            <button
              onClick={() => toggleFollow(person.id)}
              className={`text-xs font-semibold px-3 py-1 rounded-full border transition-all flex-shrink-0 cursor-pointer ${
                followed[person.id]
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-transparent text-blue-400 border-blue-400 hover:bg-blue-900/30"
              }`}
            >
              {followed[person.id] ? "ติดตามแล้ว" : "+ ติดตาม"}
            </button>
          </li>
        ))}
      </ul>

      <button className="mt-4 text-xs text-gray-400 hover:text-white hover:underline w-full text-left cursor-pointer transition-colors">
        ดูการแนะนำทั้งหมด →
      </button>
    </div>
  );
}

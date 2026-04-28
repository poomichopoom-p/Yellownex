import { useState, useRef } from 'react';

function StartPost() {
    const [postText, setPostText] = useState("");
    const [selectedImage, setSelectedImage] = useState(null);
    const fileInputRef = useRef(null);

    const handlePostSubmit = () => {
        alert("บันทึกโพสต์สำเร็จ: " + postText + (selectedImage ? " (พร้อมรูปภาพ)" : ""));
        setPostText("");
        setSelectedImage(null);
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setSelectedImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="bg-[#1a1a1a] rounded-xl border border-gray-800 p-3 mb-2 shadow-sm">
            {/* TOP ROW: User Icon and Input */}
            <div className="flex gap-2 items-start mb-3">
                <img
                    src="https://media.printler.com/media/photo/185186.jpg"
                    alt="User"
                    className="w-12 h-12 rounded-full object-cover mt-1"
                />
                <div className="flex-1 flex flex-col gap-2">
                    <textarea 
                      placeholder="คุณต้องการพูดคุยเรื่องอะไร?"
                      className="w-full bg-[#121212] border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 hover:bg-[#222] transition-all font-medium text-sm outline-none focus:ring-1 focus:ring-blue-500 min-h-[60px] resize-none"
                      value={postText}
                      onChange={(e) => setPostText(e.target.value)}
                    />
                    
                    {/* Image Preview */}
                    {selectedImage && (
                        <div className="relative mt-2 rounded-lg overflow-hidden border border-gray-700">
                            <button 
                                onClick={() => setSelectedImage(null)}
                                className="absolute top-2 right-2 bg-black/70 text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-black/90 transition-colors z-10"
                            >
                                ✕
                            </button>
                            <img src={selectedImage} alt="Preview" className="w-full h-auto max-h-[300px] object-cover" />
                        </div>
                    )}
                </div>
            </div>

            <div className="flex justify-between px-1 border-t border-gray-800 pt-2">
                <input 
                    type="file" 
                    accept="image/*" 
                    className="hidden" 
                    ref={fileInputRef} 
                    onChange={handleImageChange}
                />
                
                <button 
                    onClick={() => fileInputRef.current.click()}
                    className="flex items-center gap-2 hover:bg-gray-800 p-2.5 rounded-md transition-colors text-blue-400 font-semibold text-sm"
                >
                    <span className="text-xl">🖼️</span>
                    <span className="text-gray-400">รูปภาพ</span>
                </button>

                <button className="flex items-center gap-2 hover:bg-gray-800 p-2.5 rounded-md transition-colors text-green-500 font-semibold text-sm">
                    <span className="text-xl">🎥</span>
                    <span className="text-gray-400">วิดีโอ</span>
                </button>

                <button className="flex items-center gap-2 hover:bg-gray-800 p-2.5 rounded-md transition-colors text-orange-400 font-semibold text-sm">
                    <span className="text-xl">📅</span>
                    <span className="text-gray-400">กิจกรรม</span>
                </button>

                <button className="flex items-center gap-2 hover:bg-gray-800 p-2.5 rounded-md transition-colors text-red-400 font-semibold text-sm">
                    <span className="text-xl">📝</span>
                    <span className="text-gray-400">บทความ</span>
                </button>
            </div>

            {(postText.length > 0 || selectedImage) && (
                <div className="mt-3 flex justify-end">
                    <button 
                      className="bg-blue-600 text-white px-5 py-1.5 rounded-full font-semibold text-sm hover:bg-blue-700 transition-colors shadow-sm"
                      onClick={handlePostSubmit}
                    >
                      โพสต์
                    </button>
                </div>
            )}
        </div>
    );
}

export default StartPost;
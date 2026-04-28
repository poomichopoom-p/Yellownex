export const postsData = [
  {
    id: 1,
    author: {
      name: "Siriporn T.",
      headline: "Senior Engineer · Agoda",
      avatar: "https://i.pravatar.cc/150?u=siriporn",
    },
    content: "ตื่นเต้นมากค่ะ! วันนี้ได้มีโอกาสแชร์ความรู้เรื่อง React 19 ในทีม Engineering ที่ Agoda ขอบคุณทุกคนที่มาร่วมฟังและแลกเปลี่ยนความเห็นกันนะคะ 🚀 #React #Agoda #Engineering",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1000&auto=format&fit=crop",
    likeCount: 245,
    isLiked: true,
    commentCount: 12,
    createdAt: "2 ชั่วโมงที่แล้ว",
    comments: [
      {
        id: 101,
        author: "Anan K.",
        text: "เนื้อหาดีมากครับ ยินดีด้วยนะครับ!",
        time: "1 ชั่วโมงที่แล้ว"
      },
      {
        id: 102,
        author: "Suparat W.",
        text: "เสียดายไม่ได้เข้าฟังเลย ไว้มีอัดวิดีโอไหมคะ",
        time: "30 นาทีที่แล้ว"
      }
    ]
  },
  {
    id: 2,
    author: {
      name: "Kitti Design",
      headline: "UI/UX Designer · Creative Agency",
      avatar: "https://i.pravatar.cc/150?u=kitti",
    },
    content: "เพิ่งลองใช้ Figma Variable สำหรับทำ Design System บอกเลยว่าประหยัดเวลาไปเยอะมาก ใครยังไม่ลอง แนะนำเลยครับ!",
    image: null,
    likeCount: 89,
    isLiked: false,
    commentCount: 5,
    createdAt: "5 ชั่วโมงที่แล้ว",
    comments: [
      {
        id: 201,
        author: "Me",
        text: "จริงครับ Variable ช่วยชีวิตมาก",
        time: "2 ชั่วโมงที่แล้ว"
      }
    ]
  },
  {
    id: 3,
    author: {
      name: "Thana Mongkhon",
      headline: "Backend Developer · Fintech Solutions",
      avatar: "https://i.pravatar.cc/150?u=thana",
    },
    content: "ความท้าทายของการจัดการ Microservices ในระบบการเงินคือเรื่องของ Data Consistency ใครมีเทคนิคดีๆ มาแชร์กันได้นะคะ",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop",
    likeCount: 156,
    isLiked: false,
    commentCount: 28,
    createdAt: "Yesterday",
    comments: [
      {
        id: 301,
        author: "Somsak P.",
        text: "ส่วนใหญ่ผมใช้ Saga Pattern ครับ",
        time: "20 ชั่วโมงที่แล้ว"
      },
      {
        id: 302,
        author: "Wipa R.",
        text: "Event Sourcing ก็เป็นทางเลือกที่น่าสนใจนะคะ",
        time: "18 ชั่วโมงที่แล้ว"
      }
    ]
  }
];

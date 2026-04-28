// Mock Data for Yellownex Social Network Project

// ==================== POSTS DATA ====================
export const postsData = [
  {
    id: 1,
    author: {
      name: "Siriporn T.",
      headline: "Senior Engineer · Agoda",
      avatar: "https://i.pravatar.cc/150?u=siriporn",
    },
    content:
      "เพิ่งเปิด Pull Request แรกของปีนี้! 🎉 ขอบคุณทีมงานทุกคนที่ช่วย review และให้ feedback ดีๆ ด้วยนะคะ #EngineerLife #OpenSource",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800",
    likeCount: 184,
    isLiked: true,
    commentCount: 23,
    comments: [
      {
        id: 1,
        author: "สมชาย สายโค้ด",
        text: "ยินดีต้อนรับครับ! 🎉",
        time: "1 ชั่วโมงที่แล้ว",
      },
      {
        id: 2,
        author: "วิภา พารวย",
        text: "Great work! สู้ๆ ค่ะ",
        time: "45 นาทีที่แล้ว",
      },
    ],
    createdAt: "2 ชั่วโมงที่แล้ว",
  },
  {
    id: 2,
    author: {
      name: "CK Cheong",
      headline: "CEO @ Fastwork",
      avatar: "https://i.pravatar.cc/150?u=ck",
    },
    content:
      "มาแชร์ประสบการณ์การสร้างทีม Startup กันครับ สิ่งสำคัญที่สุดคือการหาคนที่มี passion เดียวกับเรา ไม่ใช่แค่เก่ง แต่ต้องเข้าใจ vision ของบริษัทด้วย",
    image: null,
    likeCount: 256,
    isLiked: false,
    commentCount: 45,
    comments: [
      {
        id: 1,
        author: "ธนา มั่นคง",
        text: "ขอบคุณสำหรับ insight ครับ CEO",
        time: "3 ชั่วโมงที่แล้ว",
      },
    ],
    createdAt: "5 ชั่วโมงที่แล้ว",
  },
  {
    id: 3,
    author: {
      name: "Melissa Torres",
      headline: "LinkedIn Recruiter",
      avatar: "https://i.pravatar.cc/150?u=melissa",
    },
    content:
      "กำลังมองหา talent ด้าน React/TypeScript อยู่พอดีค่ะ ใครสนใจ opportunity ดีๆ ติดต่อมาได้เลยนะคะ 💼",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800",
    likeCount: 89,
    isLiked: false,
    commentCount: 12,
    comments: [],
    createdAt: "1 วันที่แล้ว",
  },
];

// ==================== USER PROFILE DATA ====================
export const userProfile = {
  id: 1,
  name: "ธรวัชร ภูมิช่อ",
  headline: "Aspiring VFX Artist with Background in Character FX",
  avatar: "https://i.pravatar.cc/150?u=tor",
  banner: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=1200",
  location: "กรุงเทพมหานคร, กรุงเทพมหานคร",
  company: "Riff Studio",
  companyLogo: "https://via.placeholder.com/24",
  education: "มหาวิทยาลัยกรุงเทพ",
  connections: 482,
  profileViews: 124,
  impressions: 2047,
};

// ==================== CONTACTS/MESSAGING DATA ====================
export const contactsData = [
  {
    id: 1,
    name: "Melissa Torres",
    role: "LinkedIn Offer",
    lastMsg: "Update your job status on LinkedIn",
    lastTime: "11:15 AM",
    online: true,
    avatar: "https://i.pravatar.cc/150?u=melissa",
  },
  {
    id: 2,
    name: "CK Cheong",
    role: "CEO @ Fastwork",
    lastMsg: "See you later!",
    lastTime: "Yesterday",
    online: false,
    avatar: "https://i.pravatar.cc/150?u=ck",
  },
  {
    id: 3,
    name: "สมชาย สายโค้ด",
    role: "Frontend Developer",
    lastMsg: "Thanks for the connection!",
    lastTime: "2 วันที่แล้ว",
    online: true,
    avatar: "https://i.pravatar.cc/150?u=1",
  },
  {
    id: 4,
    name: "วิภา พารวย",
    role: "Full Stack Developer",
    lastMsg: "Great portfolio!",
    lastTime: "3 วันที่แล้ว",
    online: false,
    avatar: "https://i.pravatar.cc/150?u=2",
  },
];

// ==================== SUGGESTED PEOPLE DATA ====================
export const suggestedPeopleData = [
  {
    id: 1,
    firstName: "สมชาย",
    lastName: "สายโค้ด",
    city: "Bangkok",
    company: "Tech Synergy",
    education: "Chulalongkorn University",
    role: "Frontend Developer",
    skills: ["React", "Tailwind", "TypeScript"],
    image: "https://i.pravatar.cc/150?u=1",
    description: "เน้นงาน UI/UX ที่ลื่นไหลและ Responsive",
    experience: "3 years",
  },
  {
    id: 2,
    firstName: "วิภา",
    lastName: "พารวย",
    city: "Chiang Mai",
    company: "Digital Nomad Co.",
    education: "CMU",
    role: "Full Stack Developer",
    skills: ["Node.js", "React", "MongoDB"],
    image: "https://i.pravatar.cc/150?u=2",
    description: "ชอบต่อ API และออกแบบ Database Schema",
    experience: "2 years",
  },
  {
    id: 3,
    firstName: "กิตติ",
    lastName: "ดีไซน์",
    city: "Nonthaburi",
    company: "Creative Agency",
    education: "KMUTT",
    role: "UI/UX Designer",
    skills: ["Figma", "CSS", "Adobe XD"],
    image: "https://i.pravatar.cc/150?u=3",
    description: "เน้นการออกแบบที่ผู้ใช้ใช้งานง่ายที่สุด",
    experience: "5 years",
  },
  {
    id: 4,
    firstName: "ธนา",
    lastName: "มั่นคง",
    city: "Bangkok",
    company: "Fintech Solutions",
    education: "Kasetsart University",
    role: "Backend Developer",
    skills: ["Go", "SQL", "Docker"],
    image: "https://i.pravatar.cc/150?u=4",
    description: "เชี่ยวชาญเรื่อง Microservices และ Performance",
    experience: "4 years",
  },
  {
    id: 5,
    firstName: "อารี",
    lastName: "เรียนรู้",
    city: "Phuket",
    company: "Startup Hub",
    education: "Mahidol University",
    role: "Frontend Developer",
    skills: ["Vue.js", "SASS", "JavaScript"],
    image: "https://i.pravatar.cc/150?u=5",
    description: "กำลังอินกับ Animation ในเว็บไซต์",
    experience: "1 year",
  },
];

// ==================== NAVIGATION ITEMS ====================
export const navItems = [
  { id: 1, icon: "home", label: "หน้าแรก", path: "/", active: true },
  {
    id: 2,
    icon: "users",
    label: "เครือข่ายของฉัน",
    path: "/network",
    active: false,
  },
  { id: 3, icon: "briefcase", label: "งาน", path: "/jobs", active: false },
  {
    id: 4,
    icon: "message",
    label: "ข้อความ",
    path: "/messages",
    active: false,
  },
  {
    id: 5,
    icon: "bell",
    label: "การแจ้งเตือน",
    path: "/notifications",
    active: false,
    badge: 3,
  },
  { id: 6, icon: "user", label: "โปรไฟล์", path: "/profile", active: false },
];

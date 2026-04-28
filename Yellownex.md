<<<<<<< HEAD
# Yellownex Project Updates

โปรเจกต์นี้ได้รับการปรับปรุงเพื่อแก้ไขข้อผิดพลาด (Errors) และอัปเกรดหน้าตา (UI) ให้มีความสวยงาม ทันสมัย และใช้งานได้ดียิ่งขึ้น โดยใช้เทคโนโลยีหลักเป็น React และ Tailwind CSS

## 🛠 รายการแก้ไขและปรับปรุง

### 1. การแก้ไขข้อผิดพลาด (Bug Fixes)
- **App.jsx:** 
    - แก้ไข Typo ในส่วนของ Route จาก `CharBar` เป็น `ChatBar`
    - เพิ่ม Route ที่ขาดหายไป: `/network`, `/messages` (placeholder), และ `/profile` เพื่อให้ระบบ Navigation ทำงานได้สมบูรณ์ ไม่เกิดหน้าขาวเมื่อกดเมนู

### 2. การปรับปรุงโครงสร้างหน้าเว็บ (Layout & Navigation)
- **Layout.jsx:** 
    - ปรับปรุง Navigation Bar ใหม่ให้มีดีไซน์คล้าย LinkedIn (Modern Professional Look)
    - เพิ่มระบบ Active State ให้กับเมนูที่เลือกอยู่
    - เปลี่ยนระบบจัดวาง Layout เป็นแบบ Flexbox ที่ยืดหยุ่นกว่า
    - นำส่วน "คนที่คุณอาจรู้จัก" (Suggested People) ที่เคย Hardcoded ออกและใช้ Component จริงแทน
- **index.css:** ลบการจำกัดความกว้างของ `#root` เพื่อให้หน้าเว็บขยายได้เต็มหน้าจอและดูดีในทุกขนาดอุปกรณ์

### 3. ฟีเจอร์ใหม่: ระบบอัปโหลดรูปภาพ (File Upload Process)
- **StartPost.jsx:** 
    - เพิ่มระบบเลือกไฟล์รูปภาพผ่านปุ่ม "รูปภาพ" (🖼️) โดยใช้ `Hidden Input` และ `useRef`
    - เพิ่มระบบ **Image Preview** เพื่อแสดงตัวอย่างรูปภาพก่อนทำการโพสต์
    - สามารถลบรูปภาพที่เลือกออกได้ก่อนกดโพสต์
    - ปรับปรุงช่องกรอกข้อความเป็น `textarea` ที่รองรับหลายบรรทัด

### 4. การออกแบบส่วนประกอบใหม่ (Dark Theme Overhaul)
เราได้ปรับปรุงดีไซน์ทั้งหมดให้เป็น **Dark Theme (Black Mode)** โดยใช้ Tailwind CSS เพื่อความสวยงามและสบายตา:
- **Global Theme:** เปลี่ยนพื้นหลังหลักเป็นสีดำสนิท (Pure Black) และใช้ตัวอักษรสีเทาอ่อน/ขาวเพื่อความคมชัด
- **Card Design:** ทุกการ์ด (Posts, Sidebar, Suggestions) เปลี่ยนเป็นสีเทาเข้ม (`#1a1a1a`) พร้อมขอบสีเทาหม่น (`gray-800`)
- **Navigation:** แถบเมนูด้านบนและหน้าต่างแชทปรับเป็นสีเข้มเพื่อให้เข้ากับธีมรวม
- **Input & Interaction:** ช่องกรอกข้อความและปุ่มกดต่างๆ มีการตอบสนอง (Hover/Focus) ที่เหมาะสมกับธีมมืด

### 5. การจัดการข้อมูล (Data Integration)
- เชื่อมต่อข้อมูลจาก `mockData.js` เข้ากับ Component ต่างๆ อย่างสมบูรณ์ (เช่น Suggested People, Posts Feed, Contacts)

---
*บันทึกโดย Gemini CLI - 28 เมษายน 2026*
=======
# Yellownex Project Overview

Yellownex is a professional social media platform clone (inspired by LinkedIn) built with modern web technologies.

## Tech Stack
- **Frontend Framework:** React 19
- **Routing:** React Router DOM v7
- **Styling:** Tailwind CSS v4 (with `@tailwindcss/vite`)
- **Icons:** Lucide-React
- **Build Tool:** Vite

## Project Structure
- `src/Components/`: Reusable UI components.
  - `Layout.jsx`: The main layout wrapper including Navbar, Sidebars, and the Messaging system.
  - `01_PostCard.jsx`: Handles individual post rendering, including likes and interactions.
  - `02_CommentSection.jsx`: Manages the display and submission of comments within a post.
  - `03_PostFeed.jsx`: Renders a list of PostCards based on provided data.
  - `SideBar.jsx`: Left-side profile summary and navigation menu.
  - `ChatBar.jsx` & Messaging System: Bottom-right floating chat interface.
  - `StartPost.jsx`: Component for creating new posts.
  - `SuggestedPeople.jsx`: Right-side recommendations.
- `src/Page/`: Main page components.
  - `Home.jsx`: The primary feed page.
- `src/mockData.js/`: Directory containing static data for prototyping.
  - `Data.js`: User/Contact profile data.
  - `postsData.js`: Feed post data including authors, content, and comments.

## Key Features & Logic
1.  **Layout & Routing:** Uses `createBrowserRouter` for navigation. The `Layout` component wraps the entire app, providing a consistent Navbar and Sidebar experience.
2.  **State Management:**
    -   `Layout.jsx` manages `activeChats` and `chatHistories` for the messaging system.
    -   `01_PostCard.jsx` manages local like state and expansion of long text.
    -   `02_CommentSection.jsx` manages local comment list state.
3.  **Messaging System:** A dynamic chat interface that allows opening/closing chat windows and sending messages.
4.  **Responsive Design:** Utilizes Tailwind CSS grid and flexbox for a responsive layout (Sidebar hides on smaller screens).

## Recent Updates
- Created `src/mockData.js/postsData.js` to provide structured data for the post feed, including author details, post content, images, and nested comments.
- Mapped the data structure to match the props expected by `01_PostCard.jsx`, `02_CommentSection.jsx`, and `03_PostFeed.jsx`.
>>>>>>> 10f0d6b (No_config)

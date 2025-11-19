# 💙💛❤️ RoMap – Romanian Cultural Heritage Learning Platform  
Interactive Map • Cultural Education • Gamified Learning

## 🧠 Research Context  
**Research Question:**  
*Can a digital, interactive application help Romanian communities or students increase their connection to their cultural heritage?*

RoMap is designed as a learning tool and cultural exploration platform.  
It aims to address cultural disconnect by providing visually engaging, modern, and easy-to-use interfaces that teach users about Romania’s regions, traditions, and history.

The project blends **education**, **technology** and **cultural preservation**.

---

## 📖 Project Overview  
**RoMap** is a web application that allows users to explore Romania’s cultural regions through an interactive map and a structured learning experience.  
The app presents each region with its own cultural identity, traditional elements, historical context, and modern fun facts.

### Core Goals  
- Strengthen cultural identity and awareness  
- Provide an accessible learning tool for students and diaspora  
- Use gamification to create motivation and engagement  
- Present Romanian culture through a modern, digital lens  

### Included Features  
- 🗺️ **Interactive Map:** Regions + București shown separately  
- 🏺 **Cultural Profiles:** Food, music, costumes, slang, religion, influences  
- ⭐ **Fun Facts Section:** Landmarks, history, unusual facts, media references  
- 🎮 **Gamified Quizzes:** Region-based quizzes with progressive difficulty  
- 📊 **User Progress Tracking** (planned)  
- 🔐 **Login/Signup System** for personalized learning  
- 🎨 UI/UX designed around cultural authenticity and readability  

---

## 🧭 System Architecture  
RoMap follows a modular and scalable architecture.

### **Frontend Architecture (Implemented)**
- **React.js** component-based structure  
- **SVG-based Map Engine** for region detection  
- Reusable UI components for pages, cards, quiz questions  
- State-based navigation and dynamic region rendering  

### **Backend Architecture (Planned)**
- **Node.js / Express** server  
- **MongoDB** for user accounts, quiz data, progress tracking  
- REST API endpoints for:
  - User authentication  
  - Region data retrieval  
  - Quiz storage and retrieval  
  - Leaderboard and statistics  

---

## 🎨 UI/UX Design Principles  
- Clear visual hierarchy  
- High contrast and readability  
- Smooth navigation between map → region → quiz  
- Color palette inspired by Romanian flag tones  
- Soft whites and neutrals to balance strong cultural colors  
- Mobile-friendly layout (in progress)  

---

## ⚙️ How to Run the Project  

Follow these steps to install and run **RoMap** locally for development or testing.  
The project uses **React**, **npm**, and **Vite** as the development server.

---

### 1. Clone the Repository  
Download the project to your machine using Git:

```bash
git clone https://github.com/<your-username>/ro-map.git
cd ro-map
```
### 2. Install Dependencies

Install all required packages (React, Vite, Tailwind, etc.):

```bash
npm install
```

### 3. Start the Development Server

Run the app locally with Vite:

```bash
npm run dev
```

After a few seconds, Vite will display something like:
```bash
Local:   http://localhost:5173/
Network: http://192.168.x.x:5173/
```

Open the Local URL in your browser to view the application.


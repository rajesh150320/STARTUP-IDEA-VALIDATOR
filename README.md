# 🚀 Startup Idea Validator

A full-stack web application that analyzes startup ideas and provides intelligent insights like market demand, competition, feasibility, and actionable suggestions using AI.

---

## 🌐 Live Demo

👉 https://startup-idea-validator-hzr1.onrender.com

---

## ✨ Features

* 🔥 AI-powered startup idea analysis
* 📊 Score-based validation system (0–10 rating)
* 📈 Market demand, competition & feasibility insights
* 💡 Smart suggestions & MVP recommendations
* 🔐 Authentication system (Email + OTP)
* 📂 Dashboard with saved analyses
* 📉 Visual insights using charts

---

## 🛠 Tech Stack

### Frontend

* React.js
* Tailwind CSS

### Backend

* Node.js
* Express.js

### Database

* MongoDB (Mongoose)

### AI Integration

* OpenAI API

### Deployment

* Render (Frontend + Backend on same server)

---

## 🏗 Architecture

```text
User → Render Server
     → React Frontend
     → Express Backend (/api)
     → MongoDB Database
     → OpenAI API
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/startup-idea-validator.git
cd startup-idea-validator
```

---

### 2️⃣ Install dependencies

```bash
npm install
cd frontend && npm install
```

---

### 3️⃣ Create `.env` file

```env
PORT=8000
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_secret
OPENAI_API_KEY=your_api_key
EMAIL_USER=your_email
EMAIL_PASS=your_app_password
CORS_ORIGIN=*
```

---

### 4️⃣ Run locally

```bash
npm run dev
```

---

## 📡 API Endpoints

### Auth

* `POST /api/v1/auth/register`
* `POST /api/v1/auth/login`
* `GET /api/v1/auth/me`

### Validator

* `POST /api/v1/validator/analyze`
* `GET /api/v1/validator/history`

---

## 📷 Screenshots

(Add screenshots here for better presentation)

---

## 💡 Key Highlights

* Clean separation of frontend & backend
* Production-ready deployment on Render
* Secure authentication using JWT
* Modular backend architecture
* Scalable API structure

---

## 👨‍💻 Author

**Rajesh Kumar**
B.Tech CSE | IIIT Bhubaneswar

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub!

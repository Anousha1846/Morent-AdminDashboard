# Morent Admin Dashboard

## 🚀 Overview
The **Morent Admin Dashboard** is a powerful and intuitive interface designed to efficiently manage orders, track business analytics, and streamline operations. Built with **Next.js 14**, **Sanity**, **Clerk Authentication**, and **Recharts**, it provides a seamless experience for administrators to oversee the rental platform.

## ✨ Features
- 📊 **Dashboard Analytics** – Visual insights with real-time data tracking.
- 📦 **Order Management** – View, update, and delete orders easily.
- 🔐 **Secure Authentication** – Protected access using Clerk Auth.
- 📈 **Data Visualization** – Interactive charts powered by Recharts.
- 🔄 **Fully Dynamic** – Fetches live order data from Sanity CMS.
- 🎨 **Modern UI** – Responsive, sleek, and easy to navigate.

## 📂 Project Structure
```
/admin-dashboard
├── src
│   ├── app
│   │   ├── admin
│   │   │   ├── dashboard  # Main dashboard page
│   │   │   ├── orders     # Order management section
│   │   │   ├── login      # Admin authentication
│   │   ├── api
│   │   │   ├── orders     # API route for fetching orders
│   │   ├── layout.tsx     # Global layout component
│   │   ├── page.tsx       # Admin landing page
│   ├── components
│   │   ├── Charts         # Recharts components
│   │   ├── OrderTable     # Orders listing UI
│   ├── sanity
│   │   ├── schemaTypes
│   │   │   ├── order.ts   # Sanity schema for orders
│   ├── styles            # Tailwind CSS styles
│   ├── utils             # Helper functions
│
├── public                # Static assets
├── .env.local            # Environment variables
├── next.config.js        # Next.js configuration
├── README.md             # Project documentation
```

## 🔧 Setup & Installation
### 1️⃣ Clone the Repository
```bash
git clone https://github.com/yourusername/morent-admin-dashboard.git](https://github.com/Anousha1846/Morent-AdminDashboard
cd Morent-AdminDashboardd
```

### 2️⃣ Install Dependencies
```bash
npm install
```

### 3️⃣ Set Up Environment Variables
Create a `.env.local` file and add:
```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_sanity_project_id
NEXT_PUBLIC_SANITY_DATASET=production
```

### 4️⃣ Run the Development Server
```bash
npm run dev
```
Access the dashboard at **http://localhost:3000/admin/login**.

## 🎯 Future Enhancements
- 🚀 Add role-based access control.
- 📅 Implement advanced filtering & sorting.
- 🔄 Live order status updates.

---
**Morent Admin Dashboard** – Efficient, Secure, and Scalable 🚘💼


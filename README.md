 Here is your content rewritten **professionally, cleanly formatted, grammatically correct, and structured like a high-quality README** for a GitHub project.

---

# **Travel Inspiration Platform**

## **🌍 Introduction**

**Travel Inspiration Platform** is a modern, full-stack web application built to help users discover and plan their perfect vacations. The platform offers curated travel destinations, detailed itineraries, reviews, and the ability to save favorite locations.
It solves the challenge of overwhelming travel choices by providing personalized suggestions and a clean, intuitive interface.

---

## **📌 Project Type**

**Frontend**

---

## **🚀 Deployed Links**

* **Frontend App:** [ https://mytravelinspirations.netlify.app/ ] 
* **Database:**

  1. **Tourist Spots:**
     [https://moviedatabase-7ddef-default-rtdb.asia-southeast1.firebasedatabase.app/travel/destinations.json](https://moviedatabase-7ddef-default-rtdb.asia-southeast1.firebasedatabase.app/travel/destinations.json)
  2. **User Data:**
     [https://moviedatabase-7ddef-default-rtdb.asia-southeast1.firebasedatabase.app/usertravelhistory.json](https://moviedatabase-7ddef-default-rtdb.asia-southeast1.firebasedatabase.app/usertravelhistory.json)

---

## **🚀 Screenshots **

* Index page
![Index_page](/src/assets/index_page.png);

* Login Page
![Login_page](/src/assets/login_page.png);

* Sign-up Page
![Sign-up_page](/src/assets/signup_page.png);

* Destination Page
![Destination_page](/src/assets/all_destinations.png);

* BucketList Page
![BucketList_page](/src/assets/my_bucket_list.png);






## **📁 Directory Structure**

```
Travel-Inspiration-Platforms/
├── src/
│   ├── components/
│   └── pages/
├── .gitignore
├── README.md
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
└── vite.config.js
```

---

## **🎥 Video Walkthrough**

* **Project Demo:** [https://youtu.be/eITAP01Pzs4?si=oILPLYMfDiG9S1XQ](https://youtu.be/eITAP01Pzs4?si=oILPLYMfDiG9S1XQ)
* **Codebase Overview:** [https://youtu.be/V4Qm-TacabA](https://youtu.be/V4Qm-TacabA)

---

## **✨ Features**

* Explore a curated list of destinations with high-quality images and descriptions.
* User authentication to save favorite locations and create custom itineraries.
* Review and rating system for travelers to share their experiences.
* Responsive UI optimized for mobile and tablet users.
* Real-time data storage powered by Firebase.

---

## **🧠 Design Decisions & Assumptions**

* **Responsive UI:** Ensures seamless usability across phones, tablets, and desktops.
* **RESTful API Architecture:** Provides scalability and clean communication patterns.
* **Firebase Database:** Stores diverse destination attributes such as location, price, and activities.
* **Assumption:** Users have stable internet access for real-time search and map functionality.
* **Security:** Firebase Authentication implemented for user login and data protection.

---

## **⚙️ Installation & Setup**

Follow these steps to run the project locally:

### 1. Clone the Repository

```bash
git clone https://github.com/amaanpathan2313/Travel-Inspiration-Platforms.git
cd Travel-Inspiration-Platforms
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start Development Server

```bash
npm run dev
```

### 4. Visit the App

Open your browser at:
**[http://localhost:5173/](http://localhost:5173/)** (default Vite dev port)

---

## **🧭 Usage Guide**

<!-- ### **1. Browse Destinations**

* Visit the homepage to explore featured trip ideas.
* Use filters/search to refine results by budget, location, or activity. -->

<!-- ### **2. Save Favorites**

* Log in and click the ❤️ icon to save destinations to your personal list. -->

---

## **🔐 Test Credentials**

To access authenticated pages:

**User Account**

* **Email:** [amanpathan@gmail.com](mailto:amanpathan@gmail.com)
* **Password:** 123456

---

## **📡 Sample API Response**

**GET /api/destinations**

**Description:** Fetch all available travel destinations.

```json
[
  {
    "id": "123",
    "name": "Paris",
    "country": "France",
    "description": "City of Lights",
    "price_range": "$$$"
  }
]
```

---

## **🛠️ Technology Stack**

* **React** – Component-based UI development
* **Vite** – Fast frontend tooling
* **Firebase Realtime Database** – Data storage
* **Firebase Authentication** – Secure login
* **CSS / Custom UI Components** – Styling

---

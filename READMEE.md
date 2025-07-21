# Travel Inspiration Platforms

## Introduction
Travel Inspiration Platforms is a full-stack web application designed to inspire and assist users in planning their dream vacations. Users can explore a curated list of travel destinations, view detailed itineraries, read reviews, and save favorite locations. The platform addresses the challenge of overwhelming travel options by offering personalized recommendations and a user-friendly interface.

## Project Type
Frontend

## Deployed App
Frontend:[ https://travel2313.netlify.app/  ]
 
Database: 1.  [https://moviedatabase-7ddef-default-rtdb.asia-southeast1.firebasedatabase.app/travel/destinations.json]
          2. [https://moviedatabase-7ddef-default-rtdb.asia-southeast1.firebasedatabase.app/usertravelhistory.json]

## Directory Structure
```
travel-inspiration-platform/
├─ backend/
│  ├─ controllers/
│  ├─ models/
│  ├─ routes/
│  └─ ...
├─ frontend/
│  ├─ src/
│  ├─ components/
│  ├─ pages/
│  └─ ...
```

## Video Walkthrough of the Project
https://youtu.be/eITAP01Pzs4?si=oILPLYMfDiG9S1XQ

## Video Walkthrough of the Codebase
 https://youtu.be/V4Qm-TacabA

## Features
- Browse a curated list of travel destinations with images and descriptions.
- User authentication for saving favorite destinations and creating custom itineraries.
- Review and rating system for user feedback on destinations.

## Design Decisions or Assumptions
- **Responsive Design**: Prioritized a mobile-friendly UI for travelers accessing the platform on various devices.
- **RESTful API**: Adopted RESTful architecture for scalable and maintainable backend communication.
- **FireBase**: Designed Database to handle diverse destination attributes (e.g., location, price, activities).
- **Assumption**: Users have reliable internet access for real-time map and search functionality.
- **Security**: Implemented firebase Authentication

## Installation & Getting Started
To run the project locally, follow these steps:

1. Clone the repository:
   
   git clone https://github.com/amaanpathan2313/Travelworks-Inspiration-Platforms.git
   cd Travel-Inspiration-Platforms
   ```

3. Install frontend dependencies:
   
   cd ../Travel-Inspiration-Platforms
   npm install
   ```

4. Start the frontend server:
   npm start
   ```

5. Open `http://localhost:3000` in your browser to view the app.
 

## Usage
1. **Browsing Destinations**:
   - Navigate to the homepage to view featured destinations.
   - Use the search bar to filter by location, budget, or activity.
  
2. **Saving Favorites**:
   - Log in to your account and click the heart icon on a destination to save it to your profile.

 
 

## Credentials
For testing authenticated pages:
- **User Account**:
  - Email: `amanpathan@gmail.com`
  - Password: `123456`
 
 

- **GET /api/destinations**
  - **Description**: Retrieve a list of all travel destinations.
  - **Response**:
    ```json
    [
      {
        "id": "123",
        "name": "Paris",
        "country": "France",
        "description": "City of Lights",
        "price_range": "$$$"
      },
      ...
    ]
    ```
 

## Technology Stack
 
- **React**: Frontend library for building interactive UI components.
 
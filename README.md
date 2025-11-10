# CloudNotes -- A Note‑Keeping Website

CloudNotes is a full‑stack web application that allows users to
**create, edit, delete and manage notes online**, with authentication
and cloud‑storage support.

## Features

-   User registration and login with JWT authentication
-   Create, read, update and delete (CRUD) notes
-   Responsive UI for desktop and mobile
-   Secure backend with protected routes
-   Cloud storage of notes via MongoDB

## Tech Stack

-   **Frontend**: React.js
-   **Backend**: Node.js + Express
-   **Database**: MongoDB
-   **Authentication**: JWT
-   **UI**: Bootstrap

## Getting Started

### Prerequisites

-   Node.js
-   MongoDB connection string
-   Git installed

### Installation

    git clone https://github.com/PankajPawara/CloudNotes-A-Note-keeping-website.git
    cd CloudNotes-A-Note-keeping-website

### Setup Backend

    cd backend
    npm install

### Setup Frontend

    cd ../
    npm install

### Environment Variables

Create a `.env` file in backend folder:

    MONGO_URI=<your connection>
    JWT_SECRET=<your secret>

## Running

-   Backend: ../backend `npm start`
-   Frontend: `npm start`

## API Endpoints

  Method      Route                       Description
  -------- --------------------------- ---------------
  POST    /api/auth/createuser ->  Register user 

  POST     /api/auth/login       ->      Login user

  POST     /api/auth/getuser       ->    Get user

  GET      /api/notes/fetchnotes    ->   Fetch notes

  POST     /api/notes/addnote       ->   Add note

  PUT      /api/notes/updatenote/:id  -> Update note

  DELETE   /api/notes/deletenote/:id  -> Delete note

## Future Improvements

-   Tags and filters
-   Dark theme
-   Note sharing
-   Pagination
-   Deployment

## Author

**Pankaj Pawara**

- GitHub: [Pankaj Pawara](https://github.com/PankajPawara)

- LinkedIn: [Pankaj Pawara](https://www.linkedin.com/in/pankaj-pawara-1a3026221/)

Feel free to ⭐ the repo, open issues or contribute!

“Store your thoughts in the cloud, access them from anywhere.”
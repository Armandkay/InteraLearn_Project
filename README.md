# InteraLearn Project

The **InteraLearn** project aims to provide an interactive learning platform. This repository contains both the **backend** and **frontend** code for the project.

## Project Structure

This repository contains two main directories:

- **`interalearn_backend`**: This folder contains the backend code for the project, which includes all server-side logic, APIs, database connections, and other backend-related functionalities.
- **`interalearn_frontend`**: This folder contains the frontend code for the project, which is built with React and handles the user interface and user interactions with the backend.

### Folder Structure:

```
InteraLearn/
├── interalearn_backend/
│   ├── (backend files such as server.js, database config, etc.)
│   ├── (API routes)
│   └── (other backend-related files)
└── interalearn_frontend/
    ├── (React code, components, and styling)
    ├── (public assets and configurations)
    └── (other frontend-related files)
```

## Setup Instructions

### 1. Clone the Repository

Clone the repository to your local machine:

```bash
git clone https://github.com/Armandkay/InteraLearn.git
cd InteraLearn
```

### 2. Backend Setup

Navigate to the **`interalearn_backend`** directory:

```bash
cd interalearn_backend
```

#### Install Dependencies:

Ensure that you have **Node.js** installed. If not, download it from [Node.js](https://nodejs.org/).

Install the necessary dependencies for the backend:

```bash
npm install
```

#### Environment Configuration:

Make sure you have a `.env` file in the `interalearn_backend` directory with the necessary environment variables, such as database credentials, API keys, etc. Example:

```
DB_HOST=localhost
DB_USER=root
DB_PASS=yourpassword
DB_NAME=interalearn
PORT=5000
```

#### Run the Backend:

To start the backend server:

```bash
npm start
```

This will run the backend server locally, typically on `http://localhost:5000`.

### 3. Frontend Setup

Navigate to the **`interalearn_frontend`** directory:

```bash
cd ../interalearn_frontend
```

#### Install Dependencies:

Install the necessary dependencies for the frontend:

```bash
npm install
```

#### Run the Frontend:

To start the frontend React application:

```bash
npm start
```

This will start the React application, typically available at `http://localhost:3000`.

### 4. Testing the Application

Once both the backend and frontend are running, open your browser and navigate to `http://localhost:3000` to use the InteraLearn platform.

Make sure the frontend communicates with the backend and data is being served correctly.

## GitHub Repository Structure

This repository includes the full source code for both the backend and frontend, as well as configuration files. The following files and folders are included:

- **`interalearn_backend/`**: Contains the backend logic for handling API requests, database interactions, etc.
- **`interalearn_frontend/`**: Contains the React frontend for the interactive platform.

## How to Contribute

1. Fork this repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit them (`git commit -m 'Add new feature'`).
4. Push to your branch (`git push origin feature-branch`).
5. Open a pull request to the `main` branch.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

If you have any questions or suggestions, feel free to contact me at:  
Email: a.kayiranga1@alustudent.com  
GitHub: [Armandkay](https://github.com/Armandkay)

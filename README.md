# Frontend

Welcome to the frontend of the Hackathon Starter Project! This is where the user interface of your application lives.

## What is a Frontend?

A frontend is the part of a web application that users interact with directly. It's also known as the "client-side" of the application. It includes everything that users experience: colors and styles, buttons, images, and navigation menus.

In this project, the frontend is a **React application**. React is a popular JavaScript library for building user interfaces.

## Connecting to the Backend

This frontend is designed to work with a backend server. The backend provides data and services that the frontend needs. They communicate using a **REST API**.

Our backend is a Python application built with FastAPI. It exposes several endpoints (like `/notes`, `/notes/{note_id}`) for managing notes.

The frontend uses the `axios` library to make HTTP requests to the backend. The application provides a simple interface to create, view, edit, and delete notes. The backend is configured to accept requests from this frontend.

## Getting Started

To get the frontend running locally, follow these steps:

### Prerequisites

-   [Node.js](https://nodejs.org/) (which includes npm) installed on your computer.
-   The [backend server](../backend) from this project must be running.

### Installation

1.  **Navigate to the frontend directory:**

    ```bash
    cd frontend
    ```

2.  **Install the dependencies:**

    ```bash
    npm install
    ```

### Running the Development Server

1.  **Start the app:**

    ```bash
    npm start
    ```

This will run the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser. The page will reload when you make changes.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project. 
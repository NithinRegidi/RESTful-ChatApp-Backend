# MongoChat

MongoChat is a simple chat application built using Node.js, Express, MongoDB, and EJS. It allows users to create, view, edit, and delete chat messages. This project demonstrates the use of RESTful routes, MongoDB for data storage, and EJS for templating.

---

## Features

- **View All Chats**: Displays a list of all chat messages.
- **Create New Chat**: Add a new chat message.
- **Edit Chat**: Update an existing chat message.
- **Delete Chat**: Remove a chat message.

---

## Prerequisites

Before running this project, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [MongoDB](https://www.mongodb.com/) (running locally or on a server)

---

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```bash
   cd MongoChat
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start your MongoDB server:
   ```bash
   mongod
   ```

5. Seed the database (optional):
   ```bash
   node init.js
   ```

6. Start the application:
   ```bash
   node index.js
   ```

---

## Project Structure

```
MongoChat/
├── models/
│   └── chat.js          # Mongoose schema for chat messages
├── views/
│   ├── chats.ejs        # View for displaying all chats
│   ├── edit.ejs         # View for editing a chat
│   ├── main.ejs         # Main landing page
│   └── newchat.ejs      # View for creating a new chat
├── index.js             # Main application file
├── init.js              # Script to seed the database
├── package.json         # Project metadata and dependencies
└── README.md            # Project documentation
```

---

## Routes

### GET `/`
- Renders the main landing page.

### GET `/main`
- Redirects to the main landing page.

### GET `/chats`
- Displays all chat messages.

### GET `/newchat`
- Renders the form to create a new chat.

### POST `/newchat`
- Adds a new chat message to the database.

### GET `/chats/:id/edit`
- Renders the form to edit an existing chat.

### PUT `/chats/:id`
- Updates an existing chat message.

### DELETE `/chats/:id`
- Deletes a chat message.

---

## Technologies Used

- **Node.js**: JavaScript runtime for building the backend.
- **Express**: Web framework for Node.js.
- **MongoDB**: NoSQL database for storing chat messages.
- **Mongoose**: ODM library for MongoDB.
- **EJS**: Templating engine for rendering dynamic HTML.

---

## License

This project is licensed under the MIT License.

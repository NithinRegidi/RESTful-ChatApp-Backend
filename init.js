const mongoose = require("mongoose");
const chat = require("./models/chat");

// Connect to MongoDB
async function main() {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/chitchat", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected to MongoDB");

        // Insert chat data
        let allChats = [
            {
                from: "neha",
                to: "priya",
                msg: "send me update",
                created_at: new Date(),
            },
            {
                from: "ram",
                to: "raj",
                msg: "When we go outside?",
                created_at: new Date(),
            },
            {
                from: "john",
                to: "doe",
                msg: "Let's meet tomorrow.",
                created_at: new Date(),
            },
            {
                from: "alice",
                to: "bob",
                msg: "Can you review my code?",
                created_at: new Date(),
            },
        ];

        await chat.insertMany(allChats);
        console.log("Chats saved successfully");
        mongoose.connection.close(); // Close the connection after saving
    } catch (err) {
        console.error("Error connecting to MongoDB or saving chats:", err);
    }
}

main();


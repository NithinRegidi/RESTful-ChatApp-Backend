
const express = require('express');
const app = express();
const port = 5000;
const path = require('path');
const chat = require('./models/chat');

// Mongoose
const mongoose = require('mongoose');
main()
.then(() => { console.log(" Connected to MongoDB ") })
.catch(err => console.log(err));
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/chitchat');
}

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
    res.send("Working");
})

//Index Route
app.get("/chats", async (req, res) => {
    try {
        const chats = await chat.find();
        res.render("chats.ejs", { chats });
    } catch (err) {
        console.error(err);
        res.status(500).send("Error fetching chats");
    }
})












// App is running
app.listen(port, () => {
    console.log("Server is running");
})
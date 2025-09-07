
const express = require('express');
const app = express();
const port = 5000;
const path = require('path');
const chat = require('./models/chat');

const methodOverride = require("method-override");
app.use(methodOverride("_method"));

// Middleware to parse form data
app.use(express.urlencoded({ extended: true })); 

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

app.get("/main", (req, res) => {
    res.render("main.ejs");
})
app.get("/", (req, res) => {
    res.render("main.ejs");
})

//Index Route -> to find all chats
app.get("/chats", async (req, res) => {
    try {
        const chats = await chat.find();
        res.render("chats.ejs", { chats });
    } catch (err) {
        console.error(err);
        res.status(500).send("Error fetching chats");
    }
})


// new chats 
app.get("/newchat", (req, res) => {
    res.render("newchat.ejs");
})

app.post("/newchat", async (req, res) => {
    try {
        const {from, to, msg} = req.body;

        // Basic validation
        if (!from || !to || !msg) {
            return res.status(400).send("All fields are required");
        }

        const newChat = new chat({from, to, msg, created_at : new Date()});
        await newChat.save();
        res.redirect("chats");
    } catch (error) {
        console.error(error);
        res.status(500).send("Error saving chat");
    }
})



// Edit the chat
app.get("/chats/:id/edit", async (req, res) => {
    try {
        let { id } = req.params;
        let chatData = await chat.findById(id);

        if (!chatData) {
            return res.status(404).send("Chat not found");
        }

        res.render("edit.ejs", { chat: chatData });
    } catch (err) {
        console.error(err);
        res.status(500).send("Error loading chat for editing");
    }
});


// Update the chat
app.put("/chats/:id", async (req, res) =>{
    try {
        let {id} = req.params;
        let {newMsg} = req.body;
        let updatedChat = await chat.findByIdAndUpdate(
            id,
            {msg : newMsg},
            {runValidators : true, new : true}
        )
        res.redirect("/chats");
    } catch (error) {
       console.error(error);
        res.status(500).send("Error updating chat");
    }
})

// App is running
app.listen(port, () => {
    console.log("Server is running");
})

const chat = require("./models/chat");

// Array of chat data
let allChats = [
    {
        from: "neha",
        to: "priya",
        msg: "send me update",
        created_at: new Date()
    },
    {
        from: "ram",
        to: "raj",
        msg: "When we go outside?",
        created_at: new Date()
    },
    {
        from: "john",
        to: "doe",
        msg: "Let's meet tomorrow.",
        created_at: new Date()
    },
    {
        from: "alice",
        to: "bob",
        msg: "Can you review my code?",
        created_at: new Date()
    }
];

chat.insertMany(allChats)
    .then((res) => {
        console.log("chats Saved");
        console.log(res);
    })
    .catch((err) => {
        console.log("Error in saving chats");
        console.error(err);
    })


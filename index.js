
const express = require('express');
const app = express();
const port = 5000;
const path = require('path');


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
    res.send("Working");
})













// App is running
app.listen(port, () => {
    console.log("Server is running");
})
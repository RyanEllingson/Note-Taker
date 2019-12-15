// Dependencies
// =============================================================
const express = require("express");
const path = require("path");
const fs = require("fs");

// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
// =============================================================

// Basic route that sends the user to the index page
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

// Basic route that sends the user to the notes page
app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "notes.html"));
});

// Route that sends the user the db.json file
app.get("/api/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "db.json"));
});

// Route that adds a new note to the db.json file
app.post("/api/notes", function(req, res) {
    fs.readFile("./db.json", "utf8", function(error, response) {
        if (error) {
            console.log(error);
        }
        const notes = JSON.parse(response);
        console.log(notes);
        const noteRequest = req.body;
        console.log(noteRequest);
        const newNoteId = notes.length + 1;
        const newNote = {
            id: newNoteId,
            message: noteRequest.message
        };
        notes.push(newNote);
        res.json(newNote);
        fs.writeFile("db.json", JSON.stringify(notes, null, 2), function(err) {
            if (err) throw err;
        });
    });
})

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});
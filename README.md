# Note-Taker
Unit 11 homework
See the live app here: https://ryan-note-taker.herokuapp.com/

# Project Description
The Note Taker is an app that uses an Express backend to save, retrieve, and delete notes from a JSON file.  The user starts at the home page shown in the screenshot below:
![Home page screenshot](https://github.com/RyanEllingson/Note-Taker/blob/master/public/assets/images/homepage-screenshot.JPG)

On the home page, the user clicks the "Get Started" button to navigate to the notes page.  On the left side of the screen is a list of existing notes, just showing the title of the note.
![Notes page screenshot 1](https://github.com/RyanEllingson/Note-Taker/blob/master/public/assets/images/notes-screenshot1.JPG)

Clicking the pencil icon in the upper right corner allows the user to write a new note.  The user has to click on either the "title" or "note" field and then can type the text they want to be in the note.  Once there is content in both fields, the save icon appears in the upper right next to the pencil icon.
![Notes page screenshot 2](https://github.com/RyanEllingson/Note-Taker/blob/master/public/assets/images/notes-screenshot2.JPG)

When the user clicks the save icon, the note is added to the JSON file and the list of notes on the left is updated to include the new note.
![Notes page screenshot 3](https://github.com/RyanEllingson/Note-Taker/blob/master/public/assets/images/notes-screenshot3.JPG)

The user can review existing notes by clicking any of the note titles on the left.  This will populate the "title" and "note" fields with the saved note information.
![Notes page screenshot 4](https://github.com/RyanEllingson/Note-Taker/blob/master/public/assets/images/notes-screenshot4.JPG)

A note can be deleted from the list by clicking the red trash can icon by the note title in the list on the left.  This will remove it from the JSON file and update the list on the screen.
![Notes page screenshot 5](https://github.com/RyanEllingson/Note-Taker/blob/master/public/assets/images/notes-screenshot5.JPG)

The actual JSON file can be seen by navigating to the API in the web browser.
![API screenshot](https://github.com/RyanEllingson/Note-Taker/blob/master/public/assets/images/api-screenshot.JPG)

This app is hosted on Heroku and does not use an external database, so the JSON file that stores the notes is reset every time the server resets.

# Techniques and Technologies Used
The HTML, CSS, and frontend JavaScript were provided on this project - I wrote the backend code defining all routes used to make the app work.  This app uses Express to handle routing for GET, POST, and DELETE requests.  It uses the Node FS module to read the JSON file containing the saved notes, as well as to update the JSON file when notes are added or deleted.
const express = require('express');
const router = express.Router();
const fetchuser = require('../middleware/fetchuser')
const Note = require('../models/Note');
const { body, validationResult } = require('express-validator');

// ROUTE 1: Get all notes using: GET "/api/note/getallnotes". login required
router.get('/getallnotes', fetchuser, async (req, res) => {
    try {
        const notes = await Note.find({ user: req.user.id });
        res.json(notes);
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal server error");
    }
});

// ROUTE 2: Add new note using: GET "/api/note/addnote". login required
router.post('/addnote', fetchuser, [
    body('title', 'Title must be atleast 3 characters long').isLength({ min: 3 }),
    body('description', 'Description must be atleast 5 characters long a valid email').isLength(5),
], async (req, res) => {
    try {
        const { title, description, tag } = req.body;

        //if there are errors then send bad request and the error   
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const note = new Note({
            title, description, tag, user: req.user.id,
        })
        const newNote = await note.save();
        res.json(newNote);
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal server error");
    }
});


// ROUTE 3: Update an existing note using: PUT "/api/notes/updatenote/:id". login required
router.put('/updatenote/:id', fetchuser, async (req, res) => {
    try {
        const { title, description, tag, status } = req.body;

        // Create new note
        const newNote = {};
        if (title) { newNote.title = title };
        if (description) { newNote.description = description };
        if (tag) { newNote.tag = tag };
        if (status) { newNote.status = status };

        // Find the note and update it
        let note = await Note.findById(req.params.id);
        if (!note) { return res.status(401).send("Not found") }

        if (note.user.toString() !== req.user.id) { return res.status(401).send("Not Allowed") }

        note = await Note.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: true });
        res.json(note);

    } catch (error) {
        console.error(error);
        res.status(500).send("Internal server error");
    }
});


// ROUTE 4: Delete an existing note using: PUT "/api/notes/delete/:id". login required
router.delete('/delete/:id', fetchuser, async (req, res) => {
    try {
        // Find the note and delete it
        let note = await Note.findById(req.params.id);
        if (!note) { return res.status(401).send("Not found") }

        // Allow the user to delete this not only if the user owns it
        if (note.user.toString() !== req.user.id) { return res.status(401).send("Not Allowed") }

        note = await Note.findByIdAndDelete(req.params.id);
        res.json({ "Success": "Note has been deleted", note: note });

    } catch (error) {
        console.error(error);
        res.status(500).send("Internal server error");
    }
});


module.exports = router;
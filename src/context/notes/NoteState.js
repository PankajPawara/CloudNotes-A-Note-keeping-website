import { useState,useContext } from "react";
import NoteContext from "./noteContext";
import { AlertContext } from "../alerts/AlertState";

const NoteState = (props) => {
    const host = "http://localhost:5000";
    const initialState = []
    const [notes, setNotes] = useState(initialState)
    const alertContext = useContext(AlertContext);
    const { showAlert } = alertContext;

    // Add a Note
    const addNote = async (title, description, tag) => {
        // API Call
        const response = await fetch(`${host}/api/notes/addnote`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("token"),
            },
            body: JSON.stringify({ title, description, tag })
        });
        const note = await response.json();
        setNotes(notes.concat(note));
        showAlert("Note Created Successfully", "success");
    }

    // Get all Notes
    const getNotes = async () => {
        // API Call
        const response = await fetch(`${host}/api/notes/getallnotes`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("token"),
            },
        });
        setNotes(await response.json());
    }

    // Edit a Note
    const editNote = async (id, title, description, tag) => {
        // API Call
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("token"),
            },
            body: JSON.stringify({ title, description, tag })
        });
        response.json();
        // console.log(await response.json());

        for (let index = 0; index < notes.length; index++) {
            const element = notes[index];
            if (element._id === id) {
                element.title = title;
                element.description = description;
                element.tag = tag;
                break;
            }
        }
        showAlert("Note Updated Successfully", "success");
        setNotes(notes);
    }
    // Delete a Note
    const deleteNote = async (id) => {
        // API Call
        const response = await fetch(`${host}/api/notes/delete/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("token"),
            },
        });
        response.json();
        const newNotes = notes.filter((note) => { return note._id !== id })
        setNotes(newNotes);
        showAlert("Note Deleted Successfully", "success");
    }
    return (
        <NoteContext.Provider value={{ notes, setNotes, getNotes, addNote, editNote, deleteNote }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;
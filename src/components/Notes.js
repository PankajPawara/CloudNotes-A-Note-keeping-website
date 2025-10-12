import React, { useContext } from 'react'
import noteContext from '../context/notes/noteContext';
import NoteItem from './NoteItem';

const Notes = () => {
    const context = useContext(noteContext);
    const { notes, setNotes } = context;

    return (
        <div className="container my-3">
        <div className="row mx-3">
            <h2>Your notes</h2>
            {
                notes.map((note) => {
                    return <NoteItem key={note._id} note={note} />
                })
            }
        </div>
        </div>
    )
}

export default Notes

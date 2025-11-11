import React, { useContext, useEffect, useRef, useState } from 'react'
import noteContext from '../context/notes/noteContext';
import NoteItem from './NoteItem';
import { useNavigate } from 'react-router-dom';

const Notes = () => {
    const context = useContext(noteContext);
    const navigate = useNavigate();
    const { notes, getNotes, editNote } = context;
    const [note, setNote] = useState({ id: "", etitle: "", edescription: "", etag: "" });

    useEffect(() => {
        if (localStorage.getItem('token')) {
            getNotes();
        }
        else {
            navigate("/login");
        }
    }, [])

    const ref = useRef(null)
    const refClose = useRef(null)

    const updateNote = (currentNote) => {
        ref.current.click();
        setNote({ id: currentNote._id, etitle: currentNote.title, edescription: currentNote.description, etag: currentNote.tag });
    }
    const handleOnClick = (e) => {
        // console.log("updating..", note);
        refClose.current.click();
        e.preventDefault();
        editNote(note.id, note.etitle, note.edescription, note.etag);
    }
    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }
    return (
        <>
            <button type="button" ref={ref} className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Note</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="etitle" className="form-label">Title</label>
                                    <input type="text" className="form-control" id="etitle" name="etitle" required minLength={5} value={note.etitle} onChange={onChange} placeholder='Enter title for this note' />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="edescription" className="form-label">Description</label>
                                    <input type="text" className="form-control" id="edescription" name="edescription" required minLength={5} value={note.edescription} onChange={onChange} placeholder='Enter description for this note' />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="etag" className="form-label">Tag</label>
                                    <input type="text" className="form-control" id="etag" name="etag" value={note.etag} onChange={onChange} placeholder='ex. Personal, Trip, Financial...' />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" ref={refClose} className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                            <button disabled={note.etitle.length < 5 || note.edescription.length < 5} type="button" className="btn btn-primary" onClick={handleOnClick}>Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container py-2">

    <div className="row g-3" style={{ height: "100%", overflowY: "auto" }}>

        {/* If no notes */}
        {notes.length === 0 && (
            <div className="col-12 text-center d-flex flex-column align-items-center justify-content-center" style={{ height: "70vh" }}>
                <img
                    src="https://cdn-icons-png.flaticon.com/512/6059/6059496.png"
                    alt="No Notes"
                    className="no-notes-img mb-3"
                    style={{ width: "180px", maxWidth: "80%" }}
                />
                <h3>No Notes Found</h3>
                <p className="text-muted">Add your first note to get started!</p>
            </div>
        )}

        {/* Notes List */}
        {notes.map((note) => (
            <div key={note._id} className="d-flex flex-column flex-grow-1 col-12 col-sm-12 col-md-6 ">
                <NoteItem updateNote={updateNote} note={note} />
            </div>
        ))}

    </div>
    
</div>

        </>
    )
}

export default Notes

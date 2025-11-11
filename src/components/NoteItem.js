import { useContext } from 'react'
import noteContext from '../context/notes/noteContext';

const NoteItem = (props) => {
    const context = useContext(noteContext);
    const { deleteNote } = context;
    const { note, updateNote } = props;

    return (
        <div>
            <div className="card">
                <div className="card-body">
                    <div className="d-flex align-items-center justify-content-between">
                        <h5 className="card-title">{note.title}</h5>
                        <div>
                            <i className="fa-solid fa-pen-to-square mx-1" onClick={() => { updateNote(note) }}></i>
                            <i className="fa-solid fa-trash mx-1" onClick={() => { deleteNote(note._id) }}></i>
                        </div>
                    </div>
                    <p className="card-text">{note.description}</p>
                </div>
                <div className="card-footer text-body-secondary">{
                    new Date(note.date).toLocaleString('en-IN', {
                        weekday: 'short',
                        day: '2-digit',
                        month: 'short',
                        year: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit',
                    })
                }</div>
            </div>
        </div>
    )
}

export default NoteItem

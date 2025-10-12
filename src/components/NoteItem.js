import React from 'react'

const NoteItem = (props) => {
    const { note } = props;
    return (
        <div className="col-md-4 my-2">
            <div className="card">
                <div className="card-body">
                    <div class="d-flex align-items-center justify-content-between">
                        <h5 className="card-title">{note.title}</h5>
                        <div>
                            <i className="fa-solid fa-pen-to-square mx-1"></i>
                            <i className="fa-solid fa-trash mx-1"></i>
                        </div>
                    </div>
                    <p className="card-text">{note.description}</p>
                </div>
                <div className="card-footer text-body-secondary d-flex justify-content-between">
                    {note.date}
                    <span><i className="fa-regular fa-circle-check mx-1"></i>{note.status}</span>
                </div>
            </div>
        </div>
    )
}

export default NoteItem

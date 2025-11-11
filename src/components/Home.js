import Notes from "./Notes";
import React, { useContext, useState } from 'react';
import noteContext from '../context/notes/noteContext';

const Home = () => {
  const context = useContext(noteContext);
  const { addNote } = context;
  const [note, setNote] = useState({ title: "", description: "", tag: "" });

  const handleOnClick = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
    setNote({ title: "", description: "", tag: "" });
  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="container mt-3">

        <div className="row g-3">
          
          {/* Add Note Section */}
          <div className="col-12 col-lg-4">
            <div className='border rounded p-3 bg-light' style={{ height: "70vh"}}>
              <h1>Add a note</h1>
              <form>
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">Title</label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    name="title"
                    value={note.title}
                    required
                    minLength={5}
                    onChange={onChange}
                    placeholder='Enter title for this note'
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="description" className="form-label">Description</label>
                  <input
                    type="text"
                    className="form-control"
                    id="description"
                    name="description"
                    value={note.description}
                    required
                    minLength={5}
                    onChange={onChange}
                    placeholder='Enter description for this note'
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="tag" className="form-label">Tag</label>
                  <input
                    type="text"
                    className="form-control"
                    id="tag"
                    name="tag"
                    value={note.tag}
                    onChange={onChange}
                    placeholder='ex. Personal, Trip, Financial...'
                  />
                </div>

                <button
                  disabled={note.title.length < 5 || note.description.length < 5}
                  type="submit"
                  className="btn btn-primary w-100"
                  onClick={handleOnClick}
                >
                  Create Note
                </button>
              </form>
            </div>
          </div>

          {/* Notes Section */}
          <div className="col-12 col-lg-8">
            <div className='border rounded p-3 bg-light' style={{ height: "70vh", display: "flex", flexDirection: "column" }}>
              <h2>Your notes</h2>
              <div style={{ flex: 1, overflowY: "auto" }}>
                <Notes />
              </div>
            </div>
          </div>

        </div>

      </div>
    </>
  );
};

export default Home;

import Notes from "./Notes"

const Home = () => {

  return (
    <div className='container my-3'>
      <h1>Add a note</h1>
      <form>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title</label>
          <input type="text" className="form-control" id="title" placeholder='Enter title for this note'/>
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description</label>
          <input type="text" className="form-control" id="description" placeholder='Enter description for this note'/>
        </div>
        <div className="mb-3">
          <label htmlFor="tag" className="form-label">Tag</label>
          <input type="text" className="form-control" id="tag" placeholder='ex. Personal, Trip, Financial...'/>
        </div>
        <button type="submit" className="btn btn-primary">Create Note</button>
      </form>
      <Notes/>
    </div>
  )
}

export default Home

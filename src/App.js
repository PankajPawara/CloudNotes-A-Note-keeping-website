import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import NoteState from './context/notes/NoteState';
import Alert from './components/Alert';
import Login from './components/Login';
import Signup from './components/Signup';
import AlertState from './context/alerts/AlertState';
import Footer from './components/Footer';

function App() {

  return (
    <AlertState>
      <NoteState>
        <Router>
          <div className="app-layout">
            <Navbar />
            <Alert alert={alert} />

            <main className="content-area">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
              </Routes>
            </main>

            <Footer />
          </div>
        </Router>
      </NoteState>
    </AlertState>
  );
}

export default App;

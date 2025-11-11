import React, { useState,useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { AlertContext } from "../context/alerts/AlertState";

const Signup = () => {
    const host = process.env.REACT_APP_BACKEND_HOST;
    const [credentials, setCredentials] = useState({ name: "", email: "", password: "", cpassword: "" });
    const navigate = useNavigate();
    const alertContext = useContext(AlertContext);
    const { showAlert } = alertContext;


    const handleSignup = async (e) => {
        e.preventDefault();
        const response = await fetch(`${host}/api/auth/createuser`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password })
        })
        const json = await response.json();
        if (json.success) {
            // localStorage.setItem('token', json.jwtToken);
            showAlert("Signup successful", "success");
            navigate("/login");
        }
        else {
            showAlert("Invalid details", "danger");
        }
    }
    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }
    return (
        <div className='container border rounded p-3 bg-light' >
            <h2>Please Signup before accessing your notes</h2>
            <form onSubmit={handleSignup}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" name='name' placeholder='Enter your name' onChange={onChange} minLength={5} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" name='email' placeholder='ex. xyz123@gmail.com' aria-describedby='emailHelp' onChange={onChange} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" name='password' placeholder='Create your password' onChange={onChange} minLength={5} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="cpassword" className="form-label">Confirm Password</label>
                    <input type="password" className="form-control" id="cpassword" name='cpassword' placeholder='Confirm your password' onChange={onChange} minLength={5} required />
                </div>
                <button type="submit" className="btn btn-primary">Signup</button>
            </form>
        </div>
    )
}
export default Signup

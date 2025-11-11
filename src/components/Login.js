import React, { useState ,useContext} from 'react'
import { useNavigate } from 'react-router';
import { AlertContext } from "../context/alerts/AlertState";

const Login = () => {
    const host = process.env.REACT_APP_BACKEND_HOST;
    const [credentials, setCredentials] = useState({ email: "", password: "" });
    const navigate = useNavigate();
    const alertContext = useContext(AlertContext);
    const { showAlert } = alertContext;

    const handleLogin = async (e) => {
        e.preventDefault();
        const response = await fetch(`${host}/api/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password })
        })
        const json = await response.json();
        if (json.success) {
            //redirect
            localStorage.setItem('token', json.jwtToken);
            showAlert("Logged in successfully", "success");
            navigate("/");
        } else {
            //show error
            showAlert("Invalid credentials", "danger");
        }
    }
    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }
    return (
        <div className='container border rounded p-3 bg-light' >
            <h2>Please Login before accessing your notes</h2>
            <form onSubmit={handleLogin}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" placeholder='ex. xyz123@gmail.com' value={credentials.email} id="email" name='email' aria-describedby="emailHelp" onChange={onChange} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" placeholder='Enter your password' value={credentials.password} id="password" name='password' onChange={onChange} required minLength={5} />
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
        </div>
    )
}
export default Login

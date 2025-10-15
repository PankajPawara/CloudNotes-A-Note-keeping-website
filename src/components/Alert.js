import React, { useContext } from 'react'
import { AlertContext } from "../context/alerts/AlertState";

const Alert = () => {
    const alertContext = useContext(AlertContext);
    const { alert } = alertContext;

    return (
        <div className="container my-1" style={{ height: '50px' }}>
            {alert && <div className={`alert alert-${alert.type} alert-dismissible fade show`} role="alert">
                <strong>{alert.type === 'danger' ? 'Error:' : 'Success:'}</strong> {alert.message}
            </div>}
        </div>
    )
}

export default Alert

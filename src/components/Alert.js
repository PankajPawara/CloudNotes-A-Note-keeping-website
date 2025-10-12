import React from 'react'

const Alert = (props) => {
    return (
        <div class="container mt-1">
            <div class="alert alert-primary" role="alert">
                {props.message}
            </div>
        </div>
    )
}

export default Alert

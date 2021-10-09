import React from 'react'

function Alert(props) {
    return (
        <>
            <div>
                {props.alert && <div className={`alert alert-success d-flex align-items-center`} role="alert">
                    <div>
                        {props.alert.message}
                    </div>
                </div>}
            </div>
        </>
    )
}

export default Alert

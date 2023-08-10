import React from 'react';

export default function Alert(props) {
    return props.isAlert ? (
        <div className={`alert alert-${props.type}`} style={{ margin: '0px', height: '40px', padding: '0.5rem', textAlign: 'center' }} role="alert">
            <p><strong>{props.message1}</strong>&nbsp;{props.message2}</p>
        </div>
    ) : null;
}

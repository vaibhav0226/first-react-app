import React from 'react'

export default function About(props) {
    return (
        <>
            <div className="container my-1">{props.about}</div>
        </>
    )
}

About.defaultProps = {
    about: "Default About"
}

import React from 'react'

import './Modal.css'

export const Modal = ({ isOpen, close }) => {

    return (
        <>
            <div className={isOpen ? "modalLeft" : 'hideModal'}></div>
            <div className={isOpen ? 'childrenModal' : "hideChildren"}>
                <h1>children</h1>
                <button onClick={close}>close modal</button>
            </div>

        </>
    )
}



import React from "react";
import './Modal.css'

const Modal = ({closeModal}) => {
    return(
        //  Condition ternaire pr afficher la modal en fonction de son etat 
        <div className={closeModal ? "modal" : "modal_display"}>
                
            <div className="sucessModal">
            <img src="logo.png" className="logo" alt="logo" />
               <p>Employee createded!</p>
                <div className="closeModal">
                    <p onClick={() => closeModal(false)}>X</p>
                </div>
            </div>
        </div>
    )

}

export default Modal

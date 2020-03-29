import React, { useState } from "react";
import Modal from 'react-modal'
import './style.css'

function ModalEvent () {

  const [modalIsOpen, setModalIsOpen] = useState(false)

    return (
    <>
  
         <button className="eventModalButton" onClick={() => setModalIsOpen(true)}>Add Event</button>
         <Modal 
           ariaHideApp={false}
             isOpen={modalIsOpen}>
             <div className="newEventModalTitle">New Event</div>
             <div className="newEventModalContainer">
                 <div
                 
                  className="newEventModalDataTitle">Date:</div>
       <input className="newEventModalDateInput" id="newEventModalDateInputId" type="text" placeholder="01012020"></input>
       <div className="newEventModalDataTitle">Time:</div>
       <input className="newEventModalTimeInput" id="newEventModalTimeInputId" type="text" placeholder="12 pm"></input>
       <div className="newEventModalDataTitle">Title:</div>
       <input className="newEventModalTitleInput" id="newEventModalTitleInputId" type="text" ></input>
       <div className="newEventModalDataTitle">Note:</div>
       <input className="newEventModalNoteInput" id="newEventModalNoteInputId" type="textarea" ></input>

             </div>
             <div>
                 <button className="newEventModalSubmitButton" onClick={() => setModalIsOpen(false)}>Submit</button>
             </div>
            
         </Modal>
  </>
    );
  
}
export default ModalEvent

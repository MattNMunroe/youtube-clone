import React from "react";
import "./Modal.css";
//import Router from "react-router-dom";

function ModalNotFound({ closeModal }) {
  return (
    <div className="modalBackground">
      <div className="Container">
        <button onClick={() => closeModal(false)}> X </button>
        <div className="closeButton">
          <div className="title">
            <h1> Are You Sure You Want To Continue ? </h1>
          </div>
          <div className="body">
            The next page is awesome ! You should move forward , you will enjoy
            it .
          </div>
          <div className="footer">
            <button onClick={() => closeModal(false)}> Cancel </button>
            <button> Continue </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalNotFound;

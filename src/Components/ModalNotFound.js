import React from "react";
import "./Modal.css";
import { Link } from "react-router-dom";

function ModalNotFound() {
  return (
    <div className="modalBackground">
      <div className="Container">
        <div className="closeButton">
          <Link to="/">
            <button className="closeButtonB1"> X </button>
          </Link>
        </div>
        <div className="title">
          <h1 className="titleH1"> Oh No! Bad Link. </h1>
        </div>
        <div className="cancelButton">
          <Link to="/">
            <button className="cancelButtonB1"> Cancel </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ModalNotFound;

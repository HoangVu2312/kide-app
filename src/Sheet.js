import React from "react";
import "./Sheet.css"; // Create this file for styling the sheet component
import { IoMdClose } from "react-icons/io";
import avt from './imgs/avt.jpeg';
import kela from './imgs/kela.png';
import vr from './imgs/vr.png';
import matka from './imgs/matka.png';
import { MdQrCode } from "react-icons/md";
import { FaCheck } from "react-icons/fa6";


function Sheet({ isVisible, onClose }) {
  if (!isVisible) return null;

  return (
    <div className="sheet-overlay">
      <div className="sheet-content">

        <div className="top">
          <div className="close" onClick={onClose}><IoMdClose size={30} /></div>

          <h3>Kide.app student card</h3>
        </div>

        <div className="middle">
          <div className="avatar">
            <img src={avt} className="avt-img" alt="avt"></img>
          </div>
          <div className="logos">
            <div className="col-4"><img src={kela} className="kela-img" alt="kela"></img></div>
            <div className="col-4"><img src={vr} className="vr-img" alt="vr"></img></div>
            <div className="col-4"><img src={matka} className="matka-img" alt="matka"></img></div>
          </div>


          <div className="qr-icon"><MdQrCode size={36} className="icon" /></div>

          <div className="active-button">
            <FaCheck size={23} className="check-icon" />
            <h5>VOIMASSA</h5>
          </div>
        </div>

        <div className="bottom">
          <h5>Vu Huy Hoang</h5>
          <p>Kide.app student card</p>
          <h6>Tampere University</h6>
          <h6>Higher education student</h6>
          <p>Date of birth</p>
          <h6>23/12/1999</h6>
          <p>Valid until</p>
          <h6>30/12/2029</h6>
          <p>This student app is showing the active period of the student.</p>
        </div>
      </div>
    </div>
  );
}

export default Sheet;

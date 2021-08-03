import React from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import { modalProps } from "./interface/ICustomModal";
import { styles } from "./styles";
import {Colors} from "../../Theme";

const customStyles = {
  content: {
    height: "max-content",
    width: "max-content",
    margin: "auto",
    border: '0px',
    borderRadius: '8px',
    animation: 'bounce',
    animationDuration: '2s'
  },
  overlay: {
    backgroundColor: 'rgba(0,0,0, .25)'
  },
};

export default function CustomModal(props: modalProps) {
  Modal.setAppElement("body");
  return (
    <div>
      <Modal
        isOpen={props.isOpen}
        onRequestClose={() => {
          props.setIsOpen(false);
        }}
        style={customStyles}
        contentLabel="Example Modal"
      >
        {props.children}
      </Modal>
    </div>
  );
}

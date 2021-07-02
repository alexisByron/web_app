import React from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import { modalProps } from "./interface/ICustomModal";
import { styles } from "./styles";
import {Colors} from "../../Theme";

const customStyles = {
  content: {
    height: "430px",
    width: "60%",
    margin: "auto",
    boxShadow: `-17px 17px 21px -5px ${Colors.background}`,
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

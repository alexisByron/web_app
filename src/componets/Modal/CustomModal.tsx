import React from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import { modalProps } from "./interface/ICustomModal";
import { styles } from "./styles";
import { Colors } from "../../Theme";

const customStyles = {
  content: {
    height: "max-content",
    width: "max-content",
    margin: "auto",
    border: "0px",
    borderRadius: "8px",
    animation: "bounce",
    animationDuration: "2s",
  },
  overlay: {
    backgroundColor: "rgba(0,0,0, .25)",
  },
};

export const CustomModal = ({ isOpen, setIsOpen, children }: modalProps) => {
  Modal.setAppElement("body");
  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={() => {
          setIsOpen(false);
        }}
        style={customStyles}
        contentLabel="Example Modal"
      >
        {children}
      </Modal>
    </div>
  );
};

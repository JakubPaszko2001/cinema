import React from "react";
import MuiModal from "@mui/material/Modal";
import { modalState } from "../atoms/modalAtom";
import { useRecoilState } from "recoil";

const Modal = () => {
  const [showModal, setShowModal] = useRecoilState(modalState);
  const handleClose = () => {
    setShowModal(false);
  };
  return (
    <MuiModal open={showModal} onClose={handleClose}>
      <>
        <div
          className="cursor-pointer text-2xl text-white"
          onClick={handleClose}
        >
          X
        </div>
      </>
    </MuiModal>
  );
};

export default Modal;

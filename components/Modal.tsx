import React, { useEffect } from "react";
import MuiModal from "@mui/material/Modal";
import { modalState, movieState } from "../atoms/modalAtom";
import { useRecoilState } from "recoil";

const Modal = () => {
  const [showModal, setShowModal] = useRecoilState(modalState);
  const [movieCurrent, setMovieCurrent] = useRecoilState(movieState);
  // console.log(movie);
  useEffect(() => {
    // if (!movie) return;
    async function fetchMovie() {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/${movieCurrent}?api_key=202c50b1e2676a320151967e42b9cc3b&language=en-US&append_to_response=videos`
      ).then((response) => response.json());
      console.log(data);
    }
    fetchMovie();
  }, [movieCurrent]);
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
        <div></div>
      </>
    </MuiModal>
  );
};

export default Modal;

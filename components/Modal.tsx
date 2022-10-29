import React, { useEffect, useState } from "react";
import MuiModal from "@mui/material/Modal";
import { modalState, movieState } from "../atoms/modalAtom";
import { useRecoilState } from "recoil";
import { Element, Movie } from "../types";
import ReactPlayer from "react-player/lazy";

const Modal = () => {
  const [showModal, setShowModal] = useRecoilState(modalState);
  const [movieCurrent, setMovieCurrent] = useRecoilState(movieState);
  const [trailer, setTrailer] = useState("");
  const [info, setInfo] = useState<Movie | null>();
  console.log(info);
  useEffect(() => {
    if (!movieCurrent) return;
    async function fetchMovie() {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/${movieCurrent}?api_key=202c50b1e2676a320151967e42b9cc3b&language=en-US&append_to_response=videos`
      ).then((response) => response.json());
      // console.log(data);
      setInfo(data);
      if (data?.videos) {
        const url = data.videos.results.findIndex(
          (element: Element) => element.type === "Trailer"
        );
        setTrailer(data.videos?.results[url]?.key);
      }
    }
    fetchMovie();
  }, [movieCurrent]);

  const handleClose = () => {
    setShowModal(false);
  };
  return (
    <MuiModal
      className="!top-7 left-0 right-0 z-50 mx-auto w-full max-w-5xl"
      open={showModal}
      onClose={handleClose}
    >
      <>
        <div className="relative pt-[56.25%]">
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${trailer}`}
            width="100%"
            height="100%"
            style={{ position: "absolute", top: "0", left: "0" }}
            playing
          />
          <div
            className="absolute right-5 top-5 !z-40 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white text-2xl text-black"
            onClick={handleClose}
          >
            X
          </div>
        </div>
        <div className="flex w-full flex-col bg-black pt-12 pb-12 font-main text-white">
          <h1 className="ml-4 text-xl">{info?.title}</h1>
          <h1 className="ml-4 mr-4 mt-2">{info?.overview}</h1>
        </div>
      </>
    </MuiModal>
  );
};

export default Modal;

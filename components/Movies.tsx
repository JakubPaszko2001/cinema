import React from "react";
import { Movie } from "../types";
import Image from "next/image";
import { useRecoilState } from "recoil";
import { modalState, movieState } from "../atoms/modalAtom";
import Link from "next/link";

interface Props {
  main: Movie[];
}

const Movies = ({ main }: Props) => {
  // console.log(main);
  const [showModal, setShowModal] = useRecoilState(modalState);
  const [movieCurrent, setMovieCurrent] = useRecoilState<any>(movieState);
  return (
    <div className="w-screen bg-black pt-24">
      <div className="grid w-screen grid-cols-1 items-center justify-center gap-4 p-4 md:grid-cols-2 lg:grid-cols-3">
        {main.map((item) => {
          return (
            <div key={item.id} className="flex flex-col">
              <div className="relative flex min-h-[25rem] min-w-[20rem] hover:!z-50">
                <Image
                  src={`https://image.tmdb.org/t/p/original${item?.poster_path}`}
                  layout="fill"
                  objectFit="contain"
                  alt={item?.title}
                  loading="lazy"
                />
              </div>
              <div className="flex h-[5rem] w-full items-center justify-center">
                <div
                  className="flex w-1/5 cursor-pointer items-center justify-center border-2 text-white"
                  onClick={() => {
                    setMovieCurrent(item.id);
                    setShowModal(true);
                  }}
                >
                  trailler
                </div>
                <Link href={`/movie/${item.id}`}>
                  <div className="flex w-1/5 cursor-pointer items-center justify-center border-2 text-white">
                    book
                  </div>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Movies;

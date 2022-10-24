import React from "react";
import { Movie } from "../types";
import Image from "next/image";

interface Props {
  main: Movie[];
}

const Movies = ({ main }: Props) => {
  console.log(main);
  return (
    <div className="w-screen">
      <div className="flex items-center justify-center">
        <h1 className="font-main text-2xl">Our movies</h1>
      </div>
      <div className="grid w-screen grid-cols-1 items-center justify-center gap-4 p-4 md:grid-cols-2 lg:grid-cols-3">
        {main.map((item) => {
          return (
            <div className="flex flex-col">
              <div className="relative flex min-h-[25rem] min-w-[20rem]">
                <Image
                  src={`https://image.tmdb.org/t/p/original${item?.poster_path}`}
                  layout="fill"
                  objectFit="contain"
                  className="hover:scale-110"
                />
              </div>
              <div className="flex h-[5rem] w-full items-center justify-center">
                <div className="mr-2 flex h-[2rem] w-[5rem] items-center justify-center rounded-full bg-black text-white">
                  trailler
                </div>
                <div className="ml-2 flex h-[2rem] w-[5rem] items-center justify-center rounded-full bg-black text-white">
                  book
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Movies;
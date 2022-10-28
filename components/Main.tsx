import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Movie } from "../types";

interface Props {
  main: Movie[];
}

const Main = ({ main }: Props) => {
  const [data, setData] = useState<Movie | null>(null);
  useEffect(() => {
    setData(main[Math.floor(Math.random() * main.length)]);
  }, [main]);
  // console.log(data);
  return (
    <div className="flex h-screen w-screen flex-col justify-between">
      <div className="absolute top-0 left-0 flex h-1/6 w-full items-center p-8">
        <h1 className="font-main text-2xl text-white">YoursCinema</h1>
      </div>
      <div className="relative -z-10 h-full w-full sm:hidden ">
        <Image
          src={`https://image.tmdb.org/t/p/original${data?.poster_path}`}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="-z-10 hidden h-full w-full sm:block ">
        <Image
          src={`https://image.tmdb.org/t/p/original${data?.backdrop_path}`}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="absolute bottom-[15rem] left-0 hidden max-w-[60rem] rounded-lg p-8 text-white sm:block">
        <h1 className="mb-8 font-main text-6xl">{data?.title}</h1>
        <h1 className="text-2xl">{data?.overview}</h1>
      </div>
    </div>
  );
};

export default Main;

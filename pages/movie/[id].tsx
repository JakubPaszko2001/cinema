import React, { useState, useEffect } from "react";
import Image from "next/image";
import seatsJSON from "../movie/seats.json";
import Link from "next/link";
export async function getServerSideProps({ query }: data) {
  const { id } = query;
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=202c50b1e2676a320151967e42b9cc3b&language=en-US&append_to_response=videos`
  );
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}

interface storage {
  firstRow: { id: number; reserved: boolean };
  secondRow: { id: number; reserved: boolean };
  thirdRow: { id: number; reserved: boolean };
  fourthRow: { id: number; reserved: boolean };
  fifthRow: { id: number; reserved: boolean };
}

interface data {
  query: data;
  data: data;
  title: string;
  backdrop_path: string;
  media_type?: string;
  release_date?: string;
  first_air_date: string;
  genre_ids: number[];
  id: number;
  name: string;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  vote_average: number;
  vote_count: number;
  runtime: string;
  production_countries: string[];
}

const Details = ({ data }: data) => {
  const [seats, setSeats] = useState(seatsJSON);
  const x = JSON.stringify(seats);
  const [movieData, setMovieData] = useState<storage[] | any>();
  const [emptyArray, setEmptyArray] = useState();

  useEffect(() => {
    if (localStorage.getItem(`${data.id}`) === null) {
      localStorage.setItem(`${data.id}`, x);
      const u = JSON.parse(localStorage.getItem(`${data.id}`));
      setMovieData(u);
      console.log(movieData);
    } else {
      let y = JSON.parse(localStorage.getItem(`${data.id}`));
      // console.log(y);
      setMovieData(y);
      // console.log(movieData);
    }
  }, []);
  // console.log(data);
  return (
    <div className="h-full w-full">
      <div className="flex h-24 w-full items-center pl-2">
        <Link href={`/`}>
          <div className="cursor-pointer rounded-full bg-black p-2 text-white">
            ← Go back
          </div>
        </Link>
      </div>
      <div className="w-full">
        <div className="flex flex-col">
          <div className="left-0 right-0 mx-auto my-4">
            <h1 className="font-main text-xl">{data?.title}</h1>
          </div>
          <div className="relative h-80 w-full">
            <Image
              src={`https://image.tmdb.org/t/p/original${data?.poster_path}`}
              layout="fill"
              objectFit="contain"
              alt={data?.title}
            />
          </div>
          <div className="my-4 flex w-full flex-col items-center justify-center">
            <h1 className="font-main text-xl">
              Ocena {Math.floor(data?.vote_average * 10)}/100
            </h1>
            <h1 className="font-main text-xl">
              Produkcja: {data?.production_countries[0].name}/
              {data?.production_countries[0].iso_3166_1}
            </h1>
            <h1 className="font-main text-xl">
              Data realizacji: {data?.release_date}
            </h1>
            <h1 className="font-main text-xl">
              Czas trwania: {data?.runtime} min
            </h1>
          </div>
          <div className="flex w-full flex-col items-center justify-center">
            <div className="left-0 right-0 mx-auto h-4 w-3/4 rounded-full bg-black"></div>
            <h1>screen</h1>
          </div>
          <div className="mb-2 flex flex-col">
            <div className="mx-auto flex w-3/4 flex-row items-center justify-around">
              {movieData?.firstRow.map((item) => {
                return (
                  <div
                    onClick={() => {
                      // console.log(movieData?.firstRow);
                      item.reserved = !item.reserved;
                      // console.log(movieData?.firstRow);
                    }}
                    className={`mb-2 h-6 w-6 cursor-pointer`}
                    style={{
                      backgroundColor: `${
                        item.reserved === true ? "green" : "yellow"
                      }`,
                    }}
                  >
                    {item.id}
                  </div>
                );
              })}
            </div>
            <div className="mx-auto flex w-3/4 flex-row items-center justify-around">
              {movieData?.secondRow.map((item) => {
                return (
                  <div
                    onClick={() => {
                      // console.log(movieData?.firstRow);
                      item.reserved = !item.reserved;
                      // console.log(movieData?.firstRow);
                    }}
                    className={`mb-2 h-6 w-6 cursor-pointer`}
                    style={{
                      backgroundColor: `${
                        item.reserved === true ? "green" : "yellow"
                      }`,
                    }}
                  >
                    {item.id}
                  </div>
                );
              })}
            </div>
            <div className="mx-auto flex w-3/4 flex-row items-center justify-around">
              {movieData?.thirdRow.map((item) => {
                return (
                  <div
                    onClick={() => {
                      // console.log(movieData?.firstRow);
                      item.reserved = !item.reserved;
                      // console.log(movieData?.firstRow);
                    }}
                    className={`mb-2 h-6 w-6 cursor-pointer`}
                    style={{
                      backgroundColor: `${
                        item.reserved === true ? "green" : "yellow"
                      }`,
                    }}
                  >
                    {item.id}
                  </div>
                );
              })}
            </div>
            <div className="mx-auto flex w-3/4 flex-row items-center justify-around">
              {movieData?.fourthRow.map((item) => {
                return (
                  <div
                    onClick={() => {
                      // console.log(movieData?.firstRow);
                      item.reserved = !item.reserved;
                      // console.log(movieData?.firstRow);
                    }}
                    className={`mb-2 h-6 w-6 cursor-pointer`}
                    style={{
                      backgroundColor: `${
                        item.reserved === true ? "green" : "yellow"
                      }`,
                    }}
                  >
                    {item.id}
                  </div>
                );
              })}
            </div>
            <div className="mx-auto flex w-3/4 flex-row items-center justify-around">
              {movieData?.fifthRow.map((item) => {
                return (
                  <div
                    onClick={() => {
                      // console.log(movieData?.firstRow);
                      item.reserved = !item.reserved;
                      // console.log(movieData?.firstRow);
                    }}
                    className={`mb-2 h-6 w-6 cursor-pointer`}
                    style={{
                      backgroundColor: `${
                        item.reserved === true ? "green" : "yellow"
                      }`,
                    }}
                  >
                    {item.id}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <button
          onClick={() => {
            console.log(movieData);
            const sendReserved = JSON.stringify(movieData);
            localStorage.setItem(`${data.id}`, sendReserved);
            document.location.reload();
          }}
          className="bg-black text-white"
        >
          hello
        </button>
      </div>
    </div>
  );
};

export default Details;

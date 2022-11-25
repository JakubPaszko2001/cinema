import React, { useState, useEffect } from "react";
import Image from "next/image";
import seatsJSON from "../movie/seats.json";
import Link from "next/link";
import { MdChair } from "react-icons/md";
export async function getServerSideProps({ query }: any) {
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

interface item {
  id: number;
  reserved: boolean;
}

interface data {
  data: {
    query: data;
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
    production_countries: Array<{ name: string; iso_3166_1: string }>;
  };
}

const Details = ({ data }: data) => {
  const [seats, setSeats] = useState(seatsJSON);
  const x = JSON.stringify(seats);
  const [movieData, setMovieData] = useState<storage[] | any>();
  const [emptyArray, setEmptyArray] = useState();
  // console.log(data);

  useEffect(() => {
    if (localStorage.getItem(`${data.id}`) === null) {
      localStorage.setItem(`${data.id}`, x);
      const u = JSON.parse(localStorage.getItem(`${data.id}`) || "");
      setMovieData(u);
      console.log(movieData);
    } else {
      let y = JSON.parse(localStorage.getItem(`${data.id}`) || "");
      // console.log(y);
      setMovieData(y);
      // console.log(movieData);
    }
  }, []);
  // console.log(data);

  return (
    <div className="w-screen">
      <div className="flex h-24 w-full items-center pl-2">
        <Link href={`/`}>
          <div className="cursor-pointer rounded-full bg-black p-2 text-white">
            ← Go back
          </div>
        </Link>
      </div>
      <div className="w-screen">
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
              Rating {Math.floor(data?.vote_average * 10)}/100
            </h1>
            <h1 className="font-main text-xl">
              Production: {data?.production_countries[0].name}/
              {data?.production_countries[0].iso_3166_1}
            </h1>
            <h1 className="font-main text-xl">
              Completion date : {data?.release_date}
            </h1>
            <h1 className="font-main text-xl">Duration: {data?.runtime} min</h1>
            <h1 className="flex items-center justify-center font-main text-xl">
              <MdChair style={{ color: "green", marginRight: "5px" }} /> - Free
              <MdChair
                style={{
                  color: "red",
                  marginRight: "5px",
                  marginLeft: "10px",
                }}
              />
              - Reserved
              <MdChair
                style={{
                  color: "blue",
                  marginRight: "5px",
                  marginLeft: "10px",
                }}
              />
              - Choosen
            </h1>
          </div>
          <div className="flex w-full flex-col items-center justify-center">
            <div className="left-0 right-0 mx-auto h-4 w-3/4 rounded-full bg-black"></div>
            <h1>screen</h1>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="mx-auto flex w-3/4 flex-row items-center justify-around">
          {movieData?.firstRow.map((item: item) => {
            return (
              <MdChair
                key={item.id}
                onClick={() => {
                  var seat = document.getElementById(`firstRow${item.id}`);
                  if (seat?.style.color === "green") {
                    seat.classList.toggle("!text-[blue]");
                  }
                  if (seat?.style.color === "green") {
                    item.reserved = !item.reserved;
                  } else {
                    return;
                  }
                }}
                id={`firstRow${item.id}`}
                className={`mb-2 h-6 w-6`}
                style={{
                  color: `${item.reserved === true ? "red" : "green"}`,
                  cursor: `${item.reserved === true ? "default" : "pointer"}`,
                }}
              >
                {item.id}
              </MdChair>
            );
          })}
        </div>
        <div className="mx-auto flex w-3/4 flex-row items-center justify-around">
          {movieData?.secondRow.map((item: item) => {
            return (
              <MdChair
                key={item.id}
                onClick={() => {
                  var seat = document.getElementById(`secondRow${item.id}`);
                  if (seat?.style.color === "green") {
                    seat.classList.toggle("!text-[blue]");
                  }
                  if (seat?.style.color === "green") {
                    item.reserved = !item.reserved;
                  } else {
                    return;
                  }
                }}
                id={`secondRow${item.id}`}
                className={`mb-2 h-6 w-6`}
                style={{
                  color: `${item.reserved === true ? "red" : "green"}`,
                  cursor: `${item.reserved === true ? "default" : "pointer"}`,
                }}
              >
                {item.id}
              </MdChair>
            );
          })}
        </div>
        <div className="mx-auto flex w-3/4 flex-row items-center justify-around">
          {movieData?.thirdRow.map((item: item) => {
            return (
              <MdChair
                key={item.id}
                onClick={() => {
                  var seat = document.getElementById(`thirdRow${item.id}`);
                  if (seat?.style.color === "green") {
                    seat.classList.toggle("!text-[blue]");
                  }
                  if (seat?.style.color === "green") {
                    item.reserved = !item.reserved;
                  } else {
                    return;
                  }
                }}
                id={`thirdRow${item.id}`}
                className={`mb-2 h-6 w-6`}
                style={{
                  color: `${item.reserved === true ? "red" : "green"}`,
                  cursor: `${item.reserved === true ? "default" : "pointer"}`,
                }}
              >
                {item.id}
              </MdChair>
            );
          })}
        </div>
        <div className="mx-auto flex w-3/4 flex-row items-center justify-around">
          {movieData?.fourthRow.map((item: item) => {
            return (
              <MdChair
                key={item.id}
                onClick={() => {
                  var seat = document.getElementById(`fourthRow${item.id}`);
                  if (seat?.style.color === "green") {
                    seat.classList.toggle("!text-[blue]");
                  }
                  if (seat?.style.color === "green") {
                    item.reserved = !item.reserved;
                  } else {
                    return;
                  }
                }}
                id={`fourthRow${item.id}`}
                className={`mb-2 h-6 w-6`}
                style={{
                  color: `${item.reserved === true ? "red" : "green"}`,
                  cursor: `${item.reserved === true ? "default" : "pointer"}`,
                }}
              >
                {item.id}
              </MdChair>
            );
          })}
        </div>
        <div className="mx-auto flex w-3/4 flex-row items-center justify-around">
          {movieData?.fifthRow.map((item: item) => {
            return (
              <MdChair
                key={item.id}
                onClick={() => {
                  var seat = document.getElementById(`fifthRow${item.id}`);
                  if (seat?.style.color === "green") {
                    seat.classList.toggle("!text-[blue]");
                  }
                  if (seat?.style.color === "green") {
                    item.reserved = !item.reserved;
                  } else {
                    return;
                  }
                }}
                id={`fifthRow${item.id}`}
                className={`mb-2 h-6 w-6`}
                style={{
                  color: `${item.reserved === true ? "red" : "green"}`,
                  cursor: `${item.reserved === true ? "default" : "pointer"}`,
                }}
              >
                {item.id}
              </MdChair>
            );
          })}
        </div>
      </div>
      <button
        onClick={() => {
          console.log(movieData);
          const sendReserved = JSON.stringify(movieData);
          localStorage.setItem(`${data.id}`, sendReserved);
          document.location.reload();
        }}
        className="cursor-pointer rounded-full bg-black p-2 text-white"
      >
        Book seat
      </button>
    </div>
  );
};

export default Details;

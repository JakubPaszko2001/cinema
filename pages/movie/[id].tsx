import React from "react";
import { Movie } from "../../types";

export async function getServerSideProps({ query }) {
  const { id } = query;
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=202c50b1e2676a320151967e42b9cc3b`
  );
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}

interface Props {
  data: Movie[];
}

const Details = ({ data }: Props) => {
  console.log(data);
  return <div>Details</div>;
};

export default Details;

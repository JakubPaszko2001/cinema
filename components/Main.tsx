import React, {useState, useEffect} from 'react'
import Image from 'next/image'
import {Movie} from '../types'

interface Props {
    main: Movie[]
  }

const Main = ({main}: Props) => {
    // console.log(main)
    const [data, setData] = useState<Movie | null>(null)
    useEffect(()=> {
        setData(main[Math.floor(Math.random()* main.length)])
        console.log(data)
    },[main])
    console.log(data)
  return (
    <div className='h-[93vh]'>
        <div className='absolute top-0 left-0 w-[100%] h-full -z-10 bg-center'>
            <Image
                objectFit='cover'
                layout='fill'
                src={`https://image.tmdb.org/t/p/original${data?.backdrop_path}`}
            />
        </div>
        <div className='p-4 text-white font-main pt-[30rem]'>
                <h1 className='text-4xl pb-4 lg:text-6xl'>{data?.title || data?.name || data?.original_name}</h1>
                <h1 className='lg:text-xl w-1/2'>{data?.overview}</h1>
        </div>
    </div>
  )
}

export default Main
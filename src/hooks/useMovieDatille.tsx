///import { useState, useEffect } from 'react';
import { useEffect, useState } from 'react';
import movieDB from '../api/movieDB';
import { MovieFull } from '../interfaces/movieInterface';
import { CreditsResponse, Cast } from '../interfaces/credistInterfaces';

interface MovieDatille{
    isloading:boolean,
    movieFull?:MovieFull,
    cast:Cast[];
}
export const useMovieDatille = (movieId: number) => {
  
    const [state, setstate] = useState<MovieDatille>({
        isloading:true,
        movieFull:undefined,
        cast:[],
    });

    const getMovieDetails = async() =>{

        const movieDetailsPromise = await movieDB.get<MovieFull>(`/${movieId}`);
        const castPromise = await movieDB.get<CreditsResponse>(`/${movieId}/credits`);

        const [movieDeilsRsp, castResp] = await Promise.all([movieDetailsPromise, castPromise]);

        setstate({
            isloading: false,
            movieFull:movieDeilsRsp.data,
            cast: castPromise.data.cast
        })
        
    };

    useEffect(() => {
      getMovieDetails();
    }, []);

    return{
        ...state,
    }
}

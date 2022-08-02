import { useEffect, useState } from 'react';
import { Movie, MovieDBResponse } from '../interfaces/movieInterface';
import movieDB from '../api/movieDB';

interface MoviesState {
    nowPlaying: Movie[];
    popular: Movie[];
    topRated: Movie[];
    upcoming: Movie[];
}

export const useMovie = () => {

    const [isLoanding, setIsloanding] = useState(true)
  
    const [ movieState, setMovieState ] = useState<MoviesState>({
        nowPlaying:[],
        popular:[],
        topRated:[],
        upcoming:[],
    
    })
    const getMovie = async() =>{

        
        const nowPlayingPromise =  movieDB.get<MovieDBResponse>('/now_playing');
        const popularPromise    =  movieDB.get<MovieDBResponse>('/popular');
        const topRatedPromise   =  movieDB.get<MovieDBResponse>('/top_rated');
        const upcomingPromise   =  movieDB.get<MovieDBResponse>('/upcoming');
        
        const reps = await Promise.all([
            nowPlayingPromise, 
            popularPromise, 
            topRatedPromise, 
            upcomingPromise,
        ]);

        setMovieState({
            nowPlaying : reps[0].data.results,
            popular : reps[1].data.results,
            topRated : reps[2].data.results,
            upcoming : reps[3].data.results,
            
        })
        // const peliculas = resp.data.results;
        // setPeliculasEnCine( peliculas )
   

        setIsloanding(false);

    }
    
    useEffect(() => {
        getMovie();
    }, [])

    return {
        ...movieState,
        isLoanding,
        
    }
}

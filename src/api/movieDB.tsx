import axios from "axios";


const movieDB  = axios.create({
    baseURL:'https://api.themoviedb.org/3/movie',
    params:{
        api_key: 'a490266a62e916d759b71353eb9e9838',
        language:'es-ES',
    }

});

export default movieDB;
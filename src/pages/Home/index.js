import {Container, MovieList, Movie,} from "./Style";
import {useEstate, useEffect} from 'react';

const apiKey = import.meta.env.VITE_API_KEY;
function Home(){

const[movies, setMovies] = useEstate([])

useEffect(() => {
fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${${apiKey}}&language=en-US&page=1`)
.then(Response => Response.json())
.then(data => console.log(data))

}, [])

return(
    <Container>
        <h1>Movies</h1>
     <MovieList>

        {movies.map(movie =>{
            return(
                <Movie>
                   
                 <Movie id="1">
                 <a href="https://draft.blogger.com/blog/posts/1818788552960104722">
                    <img src={movie.image_url} alt={movie.title}/></a>
                 <span>{movie.title}</span></Movie>
                 <Movie id="2">
                 
                 <a href="https://www.npmjs.com/package/react-router-dom/v/5.2.0">
                    <img src={movie.image_url} alt={movie.title}/></a>
                 <span>{movie.title}</span></Movie>



                </Movie>)})
            



        }

    


     </MovieList>

    </Container>
)
}

export default Home
import { Container, MovieList, Movie } from "./Style"



function Home(){

const movies = [
    {
        title:'Spider man',
        id:'1',
        image_url: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/7D430eqZj8y3oVkLFfsWXGRcpEG.jpg',

    },
    {
        title:'Batmam',
        id:'2',
        image_url: 'https://th.bing.com/th/id/R.9098c09932212ce01373ca545dba4bb1?rik=8P3FhprB3LGu9Q&pid=ImgRaw&r=0',

    },
    {
        title:'Super',
        image_url: 'https://th.bing.com/th/id/R.9098c09932212ce01373ca545dba4bb1?rik=8P3FhprB3LGu9Q&pid=ImgRaw&r=0',

    },
    {
        title:'Spider man',
        image_url: 'https://th.bing.com/th/id/R.9098c09932212ce01373ca545dba4bb1?rik=8P3FhprB3LGu9Q&pid=ImgRaw&r=0',

    },
    {
        title:'Batmam',
        image_url: 'https://th.bing.com/th/id/R.9098c09932212ce01373ca545dba4bb1?rik=8P3FhprB3LGu9Q&pid=ImgRaw&r=0',

    },
    {
        title:'Super',
        image_url: 'https://th.bing.com/th/id/R.9098c09932212ce01373ca545dba4bb1?rik=8P3FhprB3LGu9Q&pid=ImgRaw&r=0',

    },
]

return(
    <Container><h1>Movies</h1>
     <MovieList>

        {movies.map(movie =>{
            return(
                <Movie>
                   
                 <div id="1">
                 <a href="https://draft.blogger.com/blog/posts/1818788552960104722">
                    <img src={movie.image_url} alt={movie.title}/></a>
                 <span>{movie.title}</span></div>
                 <div id="2">
                 <a href="https://www.npmjs.com/package/react-router-dom/v/5.2.0">
                    <img src={movie.image_url} alt={movie.title}/></a>
                 <span>{movie.title}</span></div>



                </Movie>)})
            



        }

    


     </MovieList>

    </Container>
)
}

export default Home
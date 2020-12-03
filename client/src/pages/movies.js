import React from "react"
import axios from "axios"
import Navibar from "../components/navbar"
import TableData from "../components/Table"

class Movies extends React.Component {
    state = {
        movies: [],
        title: "",
        year: "",
        imdbrating: "",
        synopsis: ""
        }
        
    componentDidMount = () => {
        this.getMovies();
    };
    

    getMovies = () => {
        const options = {
            method: 'GET',
            url: 'https://unogsng.p.rapidapi.com/search',
            params: {
                type: "movie",
                orderby: 'rating',
                limit: '100',
                countrylist: '78',
                audio: 'english',
                end_year: '2020'
            },
            headers: {
                'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY,
                'x-rapidapi-host': 'unogsng.p.rapidapi.com'
            }
        };
        axios.request(options).then(res => this.setState ({
            movies: res.data.results
        })).catch(function (error) {
            console.error(error);
        });
    }

    handleSave = () => {
        axios({
          url: "/",
          method: "POST",
          data: this.state.movies,
        })
          .then(() => {
            console.log("Data has been sent to the server");
            this.getMovies();
          })
          .catch((err) => {
            console.log(err);
            console.log("Internal server error");
          });
      };
    



    render() {
        return (
            <>
            <Navibar />
            <TableData 
            handleSave={this.handleSave}
            results={this.state.movies} />
            </>
        )
        
    }
}


export default Movies
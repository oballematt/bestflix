import React from "react"
import axios from "axios"
import Navibar from "../components/navbar"
import TableData from "../components/Table"

class Shows extends React.Component {
    state = {
        shows: []

        }
    componentDidMount(){
        const options = {
            method: 'GET',
            url: 'https://unogsng.p.rapidapi.com/search',
            params: {
                type: "series",
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
            shows: res.data.results
        })).catch(function (error) {
            console.error(error);
        });
    }


    render() {
        return (
            <>
            <Navibar />
            <TableData results={this.state.shows} />
            </>
        )
        
    }
}
  

export default Shows
import React, { useState, useEffect } from 'react'
import Navibar from "../components/navbar"
import API from "../utils/API"


export default function Profile() {
    const [media, setMedia] = useState()

    useEffect(() => {
        loadMedia()
    }, [])
    
    function loadMedia() {
        API.getMedia()
          .then(res => 
            setMedia(res.data)
          )
          .catch(err => console.log(err));
      };
    return (
        <>
         <Navibar />
         <br/>
         <br/>
        <div>
           <h1>hello world</h1> 
        </div>
        </>
    )
}

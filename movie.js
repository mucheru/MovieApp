import React, { useState } from "react";
import ReactPlayer from 'react-player';
import movieTrailer from 'movie-trailer';
import Indexcss from '../index.css'

 function Movie(){

    const [video,setVideo]=useState("avengers");
    const [videoURL,setVideoURL]=useState()

    const handleSearch=async(e)=>{
        await movieTrailer(video).then((res)=>{
            setVideo(res)
        })
    }

    return(
        <div className="movie">
            <div className="search-box">
                <label>
                    search for anymovie:{""}
                </label>
                <input type="text" onChange = {(e)=>{setVideoURL(e.target.value)}} />

                <button onClick={handleSearch}>Search</button>

            </div>
            <ReactPlayer url={videoURL} controls={true}/>

        </div>
    )

}
export default Movie;

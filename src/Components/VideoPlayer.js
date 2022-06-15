//singular video
//comments
//state for video "isPlaying"
//height/width etc
//fullscreen = boolean?
//submit form 
//displays new and previous comment(s)
//deleting comments


import React from 'react'
import YouTube from 'react-youtube'
import { useParams, useState } from 'react-router-dom'

const VideoPlayer = () => {
    let params =  useParams()
    
    return (
        <div>
             <YouTube videoId={params.id}/>
        <form>
            <label type="text" name="name"><h1>Name</h1></label>
                <input type="text" name="name" placeholder='Name...'></input>
                <label type="text" name="name"><h1>Comment</h1></label>
                <input type="text" label="Comment" placeholder="..."></input>
        </form>
            <button onClick={(state) => {}}type="submit">Submit</button>
        </div>
    )
}




export default VideoPlayer


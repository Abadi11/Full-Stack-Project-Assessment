import React, {useState} from 'react';
import Video from './Video';
import StaticData from "./data/exampleresponse.json";

function AddVideos() {
 const [videos, setVideo] = useState(StaticData);
 
 //console.log(video);
 return (
   <div>
     {videos.map((element) => {
       return (
         <Video video={element} />
       );
     })}
   </div>
 );
}

export default AddVideos

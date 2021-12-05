import React, { useState, useEffect } from "react";
import Video from "./Video";
import StaticData from "./data/exampleresponse.json";

function ShowVideos(props) {
  const [videos, setVideo] = useState(StaticData);
  
  useEffect(() => {
    
  },[]);
    
  // if (props.newObj) {
  //   console.log("frnjgtrkhrjnvfsmc");
    setVideo((prev) => prev.concat(props.newObj));
  // }
  

  return (
    <div className="video-container">
      {videos
        .filter((video) =>
          video.title.toLowerCase().includes(props.searchedValue.toLowerCase())
        )
        .map((video) => {
          return <Video video={video} />;
        })}
    </div>
  );
}

export default ShowVideos;

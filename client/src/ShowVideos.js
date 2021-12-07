import React from "react";
import Video from "./Video";

function ShowVideos(props) {
  return (
    <div className="video-container">
      {props.videos
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

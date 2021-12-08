import React, { useState } from "react";
import Vote from "./Vote";
import DeleteButtonVideo from "./DeleteButtonVideo";
function Video(props) {
  const [display, setDisplay] = useState(true);
  const displayVideo = () => {
    setDisplay(false);
  };
  return (
    <div >
      {display && (
        <div className="video">
          <p>{props.video.title}</p>
          <span>
            <Vote />
          </span>
          <iframe
            controls
            src={props.video.url.replace("watch?v=", "embed/")}
            title={props.video.id}
            // frameborder={element.id}
          ></iframe>
          <DeleteButtonVideo displayVideo={displayVideo} id={props.video.id}/>
        </div>
      )}
    </div>
  );
}

export default Video;

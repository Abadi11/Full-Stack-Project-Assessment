import React, { useState } from "react";
import Vote from "./Vote";
import DeleteButtonVideo from "./DeleteButtonVideo";
function Video(props) {

  return (
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
      <DeleteButtonVideo id={props.video.id} />
    </div>
  );
}

export default Video;

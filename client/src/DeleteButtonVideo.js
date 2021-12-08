import React, { useState } from "react";

function DeleteButtonVideo(props) {
  const deleteVideo = () => {
    props.displayVideo();
    fetch(`http://localhost:5000/${props.id}`, {method: "DELETE"}).then(res=>res.json()).then(console.log);
  };
  return (
    <div>
      <button type="button" class="btn btn-danger" onClick={deleteVideo}>
        Delete
      </button>
    </div>
  );
}

export default DeleteButtonVideo;

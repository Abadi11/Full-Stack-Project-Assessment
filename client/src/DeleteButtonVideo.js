import React from "react";

function DeleteButtonVideo(props) {
  const deleteVideo = (e) => {
    fetch(`http://localhost:5000/${props.id}`, {method: "DELETE"}).then(res=>res.json()).then(console.log);
    window.location.reload(false);
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

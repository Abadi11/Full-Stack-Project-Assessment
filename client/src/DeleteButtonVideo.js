import React, {useState} from 'react'

function DeleteButtonVideo(props) {
 
 const deleteVideo = () =>{
  props.displayVideo();
  // console.log("DeleteButtonVideo")
 } 
 return (
   <div>
     <button type="button" class="btn btn-danger" onClick={deleteVideo}>
       Delete
     </button>
   </div>
 );
}

export default DeleteButtonVideo

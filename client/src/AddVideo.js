import React, { useState, useEffect } from "react";

function AddVideo(props) {
  const [display, setDisplay] = useState(false);
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  
   
  const handleChange = (e) => {
   if (e.target.name === "title"){
    setTitle(() => e.target.value)
   }else if (e.target.name === "url"){
     setUrl(() => e.target.value);
   }
   
  }
  const handleSubmit = (e) => {
   e.preventDefault();
   let submitTitle = e.target["title"].value;
   let submitUrl = e.target["url"].value;
   if (submitUrl.includes("watch?v=")) {
     props.add(submitTitle, submitUrl);
     fetch("http://localhost:5000/", {
       method: "POST",
       body: JSON.stringify({
         title: title,
         url: url,
       }),
       headers: {
         "Content-Type": "application/json",
       },
     });
  
   } else {
     alert("Please upload valid URL");
   }
   setTitle("");
   setUrl("");
  }
  return (
    <div>
      <p className="add-video" onClick={() => setDisplay(() => true)}>
        Add video
      </p>
      
      {display && (
        <div>
          <form onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                name="title"
                placeholder="Title"
                value={title}
                onChange={handleChange}
              />
            </div>
            <div>
              <input
                type="text"
                name="url"
                placeholder="URL"
                value={url}
                onChange={handleChange}
              />
            </div>
            <div>
              <button type="submit">ADD</button>
              <button onClick={() => setDisplay(() => false)}>Cancel</button>
            </div>
          </form>
        </div>
      )}
    </div>
  )
}

export default AddVideo;

import React, { useState, useEffect } from "react";

function SortVideos() {
  const [sort, setSort] = useState("desc");

  
  const sortHandler = (e) => {
    // e.preventDefault();
    // console.log("sortHandler function has been called");
    if (sort === "desc") {
      console.log("asc has been called");
      
      fetch("http://localhost:5000/", {
        method: "PUT",
        body: JSON.stringify({
          sort: "asc",
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      setSort(() => "asc");
    }
    if (sort === "asc") {
      console.log("desc has been called");
      
      fetch("http://localhost:5000/", {
        method: "PUT",
        body: JSON.stringify({
          sort: "desc",
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      setSort( () => "desc");
    }
    // updateServer();
    // refresh the page without reload
    // window.location.reload(false);
  };
  // useEffect(() => {
    
  // }, []);
  return (
    <div>
      <button onClick={sortHandler}>SORT</button>
    </div>
  );
}

export default SortVideos;

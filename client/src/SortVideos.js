import React, { useState } from "react";

function SortVideos() {
  const [sort, setSort] = useState("desc");

  const sortHandler = () => {
    console.log("sortHandler function has been called");
    if (sort === "asc") {
      console.log("asc has been called");
      fetch("http://localhost:5000/", {
        method: "PUT",
        body: JSON.stringify({
          sort: sort,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      setSort(() => "desc");
    }
    if (sort === "desc") {
      console.log("desc has been called");
      fetch("http://localhost:5000/", {
        method: "PUT",
        body: JSON.stringify({
          sort: sort,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      setSort(() => "asc");
    }

    

    // refresh the page without reload
    // window.location.reload(false);
  };
  return (
    <div>
      <button onClick={sortHandler}>SORT</button>
    </div>
  );
}

export default SortVideos;

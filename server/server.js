const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Listening on port ${port}`));
app.use(function (req, res, next) {
  console.log("Method: " + req.method + "," + "Path: " + req.path + ","  + "IP: " + req.ip);
  next();
});
app.use(cors());
app.use(express.json());
// app.use(express.urlencoded({ extended: false }));


// Store and retrieve your videos from here
// If you want, you can copy "exampleresponse.json" into here to have some data to work with
const videos = [
  {
    id: 523523,
    title: "Never Gonna Give You Up",
    url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    rating: 23,
  },
  {
    id: 523427,
    title: "The Coding Train",
    url: "https://www.youtube.com/embed/HerCR8bw_GE",
    rating: 230,
  },
  {
    id: 82653,
    title: "Mac & Cheese | Basics with Babish",
    url: "https://www.youtube.com/embed/FUeyrEN14Rk",
    rating: 2111,
  },
  {
    id: 858566,
    title: "Videos for Cats to Watch - 8 Hour Bird Bonanza",
    url: "https://www.youtube.com/watch?v=xbs7FT7dXYc",
    rating: 11,
  },
  {
    id: 453538,
    title:
      "The Complete London 2012 Opening Ceremony | London 2012 Olympic Games",
    url: "https://www.youtube.com/watch?v=4As0e4de-rI",
    rating: 3211,
  },
  {
    id: 283634,
    title: "Learn Unity - Beginner's Game Development Course",
    url: "https://www.youtube.com/watch?v=gB1F9G0JXOo",
    rating: 211,
  },
  {
    id: 562824,
    title: "Cracking Enigma in 2021 - Computerphile",
    url: "https://www.youtube.com/watch?v=RzWB5jL5RX0",
    rating: 111,
  },
  {
    id: 442452,
    title: "Coding Adventure: Chess AI",
    url: "https://www.youtube.com/watch?v=U4ogK0MIzqk",
    rating: 671,
  },
  {
    id: 536363,
    title: "Coding Adventure: Ant and Slime Simulations",
    url: "https://www.youtube.com/watch?v=X-iSQQgOd1A",
    rating: 76,
  },
  {
    id: 323445,
    title: "Why the Tour de France is so brutal",
    url: "https://www.youtube.com/watch?v=ZacOS8NBK6U",
    rating: 73,
  },
];
function newId (){
  let id = Math.floor(Math.random() * 1000000) + 1;
  for (let i=0; i<videos.length; i++){
    if (id !== videos[i].id){
      return id;
    } else {
      newId();
    }
  }
}

// GET "/"
app.get("/", (req, res) => {
  res.json(videos).status(200);
});

// POST "/"
app.post('/', (req, res) => {
  // console.log(req.body);
  let response;
  let newVideo = {
    id: newId(),
    title: req.body.title,
    url: req.body.url,
  };
  // console.log(newVideo)

  videos.push(newVideo);
  res.sendStatus(201);
})
// PUT => UPDATE sort
app.put("/", (req,res) => {
  console.log("Put has been called")
  const sort = req.body.sort;
  console.log("Type is :" + sort)
  //let orderedVideos;  
  if (sort === "asc"){
      console.log("asc has been called");
    // videos.sort(
    //   (a, b) => a.title.charAt(0) - b.title.charAt(0)
    // );
    videos.sort((a, b) =>
      a.title.charAt(0) > b.title.charAt(0)
        ? 1
        : b.title.charAt(0) > a.title.charAt(0)
        ? -1
        : 0
    );
  }else {
      console.log("desc has been called");
    // videos.sort(
    //   (a, b) => b.title.charAt(0) - a.title.charAt(0)
    // );
    videos.sort((a, b) =>
      a.title.charAt(0) < b.title.charAt(0)
        ? 1
        : b.title.charAt(0) < a.title.charAt(0)
        ? -1
        : 0
    );
  }
  res.status(204).send(videos)
})

// GET /:ID   
app.get('/:id', (req, res) => {
  let id = Number(req.params.id);
  let videoId = videos.filter(video => video.id === id); 
  res.send(videoId).status(204);
})

// DELETE /:ID
app.delete('/:id', (req, res) => {
  let id = Number(req.params.id);
  console.log(id);
  let index = videos.findIndex(video => video.id === id);
  if (index > -1){
    videos.splice(index, 1);
    res.sendStatus(204).send(`${id} is deleted`);
  }else{
    let messageError = {
      result: "failure",
      message: "Video could not be deleted",
    };
    res.send(messageError).status(500)
  }
  
})


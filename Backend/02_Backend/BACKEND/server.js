import dotenv from "dotenv";
import express from "express";
const app = express();

const port = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send("server stareted");
});
app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "Programming Joke",
      joke: "Why do programmers prefer dark mode? Because light attracts bugs.",
    },
    {
      id: 2,
      title: "JavaScript Joke",
      joke: "Why was the JavaScript developer sad? Because he didn’t know how to 'null' his feelings.",
    },
    {
      id: 3,
      title: "React Joke",
      joke: "Why did React break up with Angular? Too much change detection.",
    },
    {
      id: 4,
      title: "Debugging Joke",
      joke: "Debugging is like being the detective in a crime movie where you are also the criminal.",
    },
    {
      id: 5,
      title: "Backend Joke",
      joke: "I told my API a joke… but it returned a 500 error.",
    },
  ];
  res.send(jokes)

});
app.listen(port, () => {
  console.log((`Port started at , ${port}`));
});

const express = require("express");

//initialization
const app = express();
//application will use json format for data transfer
app.use(express.json());

const port = 8081;

const toDoList = ["Complete node byte", "Play Cricket"];
//http://localhost:8081/todos
app.get("/todos", (req, res) => {
  res.status(200).send(toDoList);
});
app.post("/todos", (req, res) => {
  let newItem = req.body.item;
  toDoList.push(newItem);
  res.status(201).send({
    message: "Task added successfully",
  });
});
app.all("*", (req, res) => {
  res.status(404).send();
});
app.delete("/todos", (req, res) => {
  let deleteThis = req.body.item;
  for (let i = 0; i < toDoList.length; i++) {
    if (toDoList[i] === deleteThis) {
      toDoList.splice(i, 1);
      break;
    }
  }
  res.status(202).send({
    message: `Deleted item ${deleteThis}`,
  });
});
app.listen(port, () => {
  console.log(`Server started at ${port}`);
});

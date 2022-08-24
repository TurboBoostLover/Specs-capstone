const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 6900;

const {
  seed,
  createNewHotWheels,
  getPeople,
  list,
  signUp,
  bye,
} = require("./dbcont.js");

app.use(express());
app.use(cors());
app.use(express.json());

//endpoints

app.post("/seed", seed);
app.post("/newHotWheels", createNewHotWheels);
app.get("/welcome", getPeople);
app.get("/list", list);
app.post("/signup", signUp);
app.delete("/list/:id", bye);

//
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

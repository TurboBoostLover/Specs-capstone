const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
const { PORT } = process.env;

const {
  seed,
  createNewHotWheels,
  getPeople,
  list,
  signUp,
  bye,
  wishlist,
  byewish,
  createNewWish,
  addMore,
  removeOne
} = require("./dbcont.js");

app.use(express());
app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, "../build")));

//endpoints

app.post("/seed", seed);
app.post("/newHotWheels", createNewHotWheels);
app.get("/welcome", getPeople);
app.get("/list", list);
app.post("/signup", signUp);
app.delete("/list/:id", bye);
app.get("/wishlist", wishlist)
app.delete("/wishlist/:id", byewish);
app.post("/newwish", createNewWish);
app.put("/add/:id", addMore)
app.put("/remove/:id", removeOne)

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

//


app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

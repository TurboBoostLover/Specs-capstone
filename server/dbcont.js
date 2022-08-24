const sequelize = require("./sequelize.js");

module.exports = {
  seed: (req, res) => {
    sequelize
      .query(
        `
    DROP TABLE IF EXISTS people;
    DROP TABLE IF EXISTS hotwheels;

CREATE TABLE people (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(25),
    password VARCHAR(50)
);


CREATE TABLE hotwheels (
    car_id SERIAL PRIMARY KEY,
    user_id INT NOT NULL REFERENCES people(user_id),
    name VARCHAR(40),
    type VARCHAR(20),
    year INT,
    color VARCHAR(30),
    quantity INT
);

INSERT INTO people (username, password)
VALUES ('natew', 'asdf');

INSERT INTO hotwheels (user_id, name, type, year, color, quantity)
VALUES (1, 'Corvette', 'American', 2022, 'Blue', 4);

   `
      )
      .then(() => {
        console.log("DB seeded!");
        res.sendStatus(200);
      })
      .catch((err) => console.log("error seeding DB", err));
  },

  createNewHotWheels: (req, res) => {
    const { user_id, name, type, year, color, quantity } = req.body;
    sequelize
      .query(
        `
      INSERT INTO hotwheels (user_id, name, type, year, color, quantity)
      VALUES (${user_id}, '${name}', '${type}', ${year}, '${color}', ${quantity})
    `
      )
      .then(() => {
        res.sendStatus(200);
      })
      .catch((err) => console.log(err));
  },

  getPeople: (req, res) => {
    sequelize
      .query(
        `
    SELECT * FROM people
    `
      )
      .then((dbRes) => {
        res.status(200).send(dbRes);
      })
      .catch((err) => console.log(err));
  },

  list: (req, res) => {
    const { guy } = req.query;
    sequelize
      .query(
        `
    SELECT * FROM hotwheels
    WHERE user_id='${guy}';
    `
      )
      .then((dbRes) => {
        res.status(200).send(dbRes);
      })
      .catch((err) => console.log(err));
  },

  signUp: (req, res) => {
    const { username, password } = req.body;
  
    sequelize.query(`SELECT * FROM people WHERE username = '${username}'`)
    .then((dbRes) => {
      if (dbRes[0].length === 0) {
      sequelize.query(
        `INSERT INTO people (username, password)
          VALUES ('${username}', '${password}');`
      ).then(() => {
        res.sendStatus(200);
      })
      .catch((err) => console.log(err));
      } else {
      res.sendStatus(500);
      return
      }
    })
  },

  bye: (req, res) => {
    const id = req.params.id;
    sequelize
      .query(
        `
    DELETE FROM hotwheels
    WHERE car_id=${id};
    `
      )
      .then(() => {
        res.sendStatus(200);
      })
      .catch((err) => console.log(err));
  },
};

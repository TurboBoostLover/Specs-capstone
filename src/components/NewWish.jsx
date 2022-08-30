import { useState } from "react";
import "../styles/NewCar.css";
import axios from "axios";

const NewWish = () => {
  let [name, setName] = useState("");
  let [year, setYear] = useState("");
  let [color, setColor] = useState("");
  let [price, setPrice] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    let guy = window.sessionStorage.getItem("user");

    let body = {
      user_id: guy,
      name: name,
      year: year,
      color: color,
      price: price,
    };

    axios.post("https://specs-capstonef24.herokuapp.com/newwish", body).then(() => {
      setName = "";
      setYear = "";
      setColor = "";
      setPrice = "";
    });
    alert(`Added car!`);
    window.location.reload();
  };
  const setStateName = (e) => {
    setName(e.target.value);
  };
  const setStateYear = (e) => {
    setYear(e.target.value);
  };
  const setStateColor = (e) => {
    setColor(e.target.value);
  };
  const setStatePrice = (e) => {
    setPrice(e.target.value);
  };
  return (
    <div className="main-div">
      <div className="box1">
        <h2 className="titleCar">Enter New Car</h2>
        <form className="inputForm" onSubmit={submitHandler}>
          <input onChange={setStateName} placeholder="Name?" type="text" />
          <input onChange={setStateYear} placeholder="Year?" type="number" />
          <input onChange={setStateColor} placeholder="Color?" type="text" />
          <input onChange={setStatePrice} placeholder="Price?" type="number"/>
          <button value="Submit" type="submit" className="pushit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
export default NewWish;

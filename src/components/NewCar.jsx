import { useState } from "react";
import "../styles/NewCar.css";
import axios from "axios";

const NewHotWheels = () => {
  let [name, setName] = useState("");
  let [type, setType] = useState("");
  let [year, setYear] = useState("");
  let [color, setColor] = useState("");
  let [quantity, setQuantity] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    let guy = window.sessionStorage.getItem("user");

    let body = {
      user_id: guy,
      name: name,
      type: type,
      year: year,
      color: color,
      quantity: quantity,
    };

    axios.post("https://specs-capstonef24.herokuapp.com/newHotWheels", body).then(() => {
      setName = "";
      setType = "";
      setYear = "";
      setColor = "";
      setQuantity = "";
    });
    alert(`Added car!`);
    window.location.reload();
  };
  const setStateName = (e) => {
    setName(e.target.value);
  };
  const setStateType = (e) => {
    setType(e.target.value);
  };
  const setStateYear = (e) => {
    setYear(e.target.value);
  };
  const setStateColor = (e) => {
    setColor(e.target.value);
  };
  const setStateQuantity = (e) => {
    setQuantity(e.target.value);
  };
  return (
    <div className="main-div">
      <div className="box1">
        <h2 className="titleCar">Enter New Car</h2>
        <form className="inputForm" onSubmit={submitHandler}>
          <input onChange={setStateName} placeholder="Name?" type="text" />
          <input onChange={setStateType} placeholder="Type?" type="text" />
          <input onChange={setStateYear} placeholder="Year?" type="number" />
          <input onChange={setStateColor} placeholder="Color?" type="text" />
          <input
            onChange={setStateQuantity}
            placeholder="How many?"
            type="number"
          />
          <button value="Submit" type="submit" className="pushit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
export default NewHotWheels;

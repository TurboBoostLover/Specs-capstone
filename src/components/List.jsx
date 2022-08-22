import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import "../styles/List.css";

const List = () => {
  const [isLoading, setLoading] = useState(true);
  const [cars, setCars] = useState([]);
  let guy = window.sessionStorage.getItem("user")
  useEffect(() => {
    axios.get("http://localhost:6900/list", { params: {guy}}).then((res) => {
      setLoading(false);
      setCars(res.data[0]);
    });
  }, []);

  if (isLoading) {
    return <div className="loading">Loading...</div>;
  }



  return (
    <div className="contain">
      {cars.map(carList => {
         return (
            <div key={carList.car_id} className={'car'}>
               <h3>Name: {carList.name}</h3>
               <h3>Type: {carList.type}</h3>
               <h3>Year: {carList.year}</h3>
               <h3>Color: {carList.color}</h3>
               <h3>Quantity: {carList.quantity}</h3>
    </div>
         )
      })}
      </div>
  );
};
export default List;

import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/List.css";
import "../styles/Search.css";

const WishLists = () => {
  const [priceTerm, setPriceTerm] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [yearTerm, setYearTerm] = useState("");
  const [isLoading, setLoading] = useState(true);
  const [cars, setCars] = useState([]);
  let guy = window.sessionStorage.getItem("user");
  useEffect(() => {
    axios.get("http://localhost:6900/wishlist", { params: { guy } }).then((res) => {
      setTimeout(() => {
        setLoading(false);
      }, 1500);
      setCars(res.data[0]);
    });
  }, []);

  if (isLoading) {
    return <div className="loading">Loading...</div>;
  }
  let bye = (id) => {
    axios.delete(`http://localhost:6900/wishlist/${id}`).then((res) => {
      window.location.reload();
      console.log(res);
    });
  };
  return (
    <div>
      <h2 className="titleCar">Wish List</h2>
      <div className="Search">
        <input
          type="text"
          placeholder="Search for Name..."
          className="typehere"
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
        <input
          type="number"
          placeholder="Search by Year..."
          className="typehere"
          onChange={(event) => {
            setYearTerm(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Search by Type..."
          className="typehere"
          onChange={(event) => {
            setPriceTerm(event.target.value);
          }}
        />
      </div>
      <div className="contain">
        {cars
          .filter((val) => {
            if (searchTerm === "") {
              return val;
            } else if (
              val.name.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return val;
            }
          })
          .filter((newVal) => {
            if (yearTerm.length === 0) {
              return newVal;
            } else if (newVal.year.toString().includes(yearTerm.toString())) {
              return newVal;
            }
          })
          .filter((val) => {
            if (priceTerm === 0) {
              return val;
            } else if (
              val.price.toString().includes(priceTerm.toString())
            ) {
              return val;
            }
          })
          .map((carList) => {
            return (
              <div key={carList.car_id} className={"car"}>
                <button onClick={() => bye(carList.wish_id)}>X</button>
                <h3 className="divide">Name: {carList.name}</h3>
                <h3 className="divide">Year: {carList.year}</h3>
                <h3 className="divide">Color: {carList.color}</h3>
                <h3 className="divide">Price: ${carList.price}</h3>
              </div>
            );
          })}
      </div>
    </div>
  );
};
export default WishLists;
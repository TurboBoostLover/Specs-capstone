import NewCar from "../components/NewCar";
import List from "../components/List";
import "../styles/Home.css";
import Header from "../components/Header";

const Home = () => {
  return (
    <div className="homescreen">
      <Header />
      <NewCar />
      <List />
    </div>
  );
};

export default Home;

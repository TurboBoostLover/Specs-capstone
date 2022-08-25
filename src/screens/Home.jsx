import NewCar from "../components/NewCar";
import List from "../components/List";
import "../styles/Home.css";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="homescreen">
      <Footer />
      <NewCar />
      <List />
    </div>
  );
};

export default Home;

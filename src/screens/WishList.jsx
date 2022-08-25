import WishLists from "../components/WishLists"
import Footer from "../components/Footer";
import NewWish from "../components/NewWish";

const WishList = () => {
  return (
    <div className="wishList">
      <NewWish />
      <WishLists />
      <Footer />
    </div>
  );
};

export default WishList;
import WishLists from "../components/WishLists"
import Footer from "../components/Footer";
import NewWish from "../components/NewWish";

const WishList = () => {
  return (
    <div className="wishList">
      <Footer />
      <NewWish />
      <WishLists />
    </div>
  );
};

export default WishList;
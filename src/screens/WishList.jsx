import WishLists from "../components/WishLists"
import Header from "../components/Header";
import NewWish from "../components/NewWish";

const WishList = () => {
  return (
    <div className="wishList">
      <Header />
      <NewWish />
      <WishLists />
    </div>
  );
};

export default WishList;
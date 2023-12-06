import HomeHeader from "../components/HomeHeader";
import Products from "../components/Products";

const Home = () => {
  return (
    <div className="w-full px-10 my-5 bg-[#FCFCFD]">
      {/* Home Header */}
      <HomeHeader />
      {/* Home Body */}
      <Products />
    </div>
  );
};

export default Home;

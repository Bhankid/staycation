import HouseDetails from "../components/HouseDetails";
import AboutPlace from "../components/AboutPlace";
import Treasure from "../components/Treasure";
import DetailFamily from "../components/DetailFamily";

function House() {
  return (
    <div className="bg-white">
      <HouseDetails />
      <AboutPlace />
      <Treasure />
      <DetailFamily />
    </div>
  );
}

export default House;

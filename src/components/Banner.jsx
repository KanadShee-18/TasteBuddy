import { IMG_URL } from "../utills/constants";

const Banner = (props) => {
  const { foodData } = props;
  const { imageId } = foodData;
  return (
    <div className="foodCard">
      <img src={IMG_URL + imageId}></img>
    </div>
  );
};

export default Banner;

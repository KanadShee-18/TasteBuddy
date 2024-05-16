import { IMG_URL } from "../utills/constants";

const Banner = (props) => {
  const { foodData } = props;
  const { imageId } = foodData;
  return (
    <div className="foodCard flex justify-center items-center">
      <img src={IMG_URL + imageId} className="w-36 h-44"></img>
    </div>
  );
};

export default Banner;

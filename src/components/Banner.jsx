import { IMG_URL } from "../utills/constants";

const Banner = (props) => {
  const { foodData } = props;
  const { imageId } = foodData;
  return (
    <div className="foodCard flex justify-center items-center">
      <img
        src={IMG_URL + imageId}
        className="w-36 h-44 ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer"
      ></img>
    </div>
  );
};

export default Banner;

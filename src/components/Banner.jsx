import { IMG_URL } from "../utills/constants";

const Banner = (props) => {
  const { foodData } = props;
  const { imageId } = foodData;
  return (
    <div className="foodCard inline-block justify-center items-center mt-8">
      <img
        src={IMG_URL + imageId}
        className="w-32 ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer"
      ></img>
    </div>
  );
};

export default Banner;

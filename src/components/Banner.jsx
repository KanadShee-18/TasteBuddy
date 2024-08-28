import { IMG_URL } from "../utills/constants";

const Banner = (props) => {
    const { foodData } = props;
    const { imageId } = foodData;
    return (
        <div className="items-center justify-center inline-block mt-4 foodCard md:mt-8">
            <img
                src={IMG_URL + imageId}
                className="w-16 duration-300 ease-in-out cursor-pointer md:w-32 hover:-translate-y-1 hover:scale-110"
            ></img>
        </div>
    );
};

export default Banner;

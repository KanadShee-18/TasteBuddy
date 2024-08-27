import { useEffect, useState } from "react";
import { MENU_URL } from "./constants";

const useRestaurantMenu = (lat, lng, resId) => {
    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        if (!resInfo) {
            fetchData();
        }
    }, [resInfo, lat, lng, resId]); // Only re-fetch if lat, lng, or resId change

    const fetchData = async () => {
        try {
            const data = await fetch(MENU_URL(lat, lng) + resId);
            const json = await data.json();
            setResInfo(json?.data);
        } catch (error) {
            console.error("Error fetching restaurant menu:", error);
        }
    };

    return resInfo;
};

export default useRestaurantMenu;

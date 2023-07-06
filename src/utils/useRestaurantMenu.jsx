import { useState, useEffect } from "react";
import { MENU_API } from "./constants";
const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    getRestaurantMenu();
  }, []);

  async function getRestaurantMenu() {
    const data = await fetch(MENU_API + resId);
    const jsonData = await data.json();
    console.log(jsonData.data);
    setResInfo(jsonData.data);
  }
  return resInfo;
};

export default useRestaurantMenu;

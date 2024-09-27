import { useLocation } from "react-router-dom";

const useCurrentLocation = () => {
  const currentLocation = useLocation().pathname;
  return currentLocation;
};

export default useCurrentLocation;









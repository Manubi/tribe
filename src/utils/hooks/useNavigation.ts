// @src/hooks/useNavigation.js
import { useCallback, useState } from "react";

const useNavigation = () => {
  const [route, setRoute] = useState("Home");

  const selectAction = useCallback(
    (option: any) => {
      if (route === option) return;
      setRoute(option);
    },
    [route]
  );

  return { currentRoute: route, setCurrentRoute: selectAction };
};

export default useNavigation;

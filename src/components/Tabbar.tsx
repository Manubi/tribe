// @src/components/Tabbar/index.jsx

import classNames from "classnames";
import { useCallback } from "react";
import { AiFillCompass, AiFillHome } from "react-icons/ai";
import { BsFillBagFill, BsFillPersonFill } from "react-icons/bs";
import { CgInbox } from "react-icons/cg";

const navigationData = ["Home", "Discover", "Store", "Inbox", "Profile"];

const Tabbar = ({ currentRoute, setCurrentRoute }: any) => {
  const getTabIcon = useCallback((item: any) => {
    switch (item) {
      case "Home":
        return <AiFillHome />;
      case "Discover":
        return <AiFillCompass />;
      case "Store":
        return <BsFillBagFill />;
      case "Inbox":
        return <CgInbox />;
      case "Profile":
        return <BsFillPersonFill />;
    }
  }, []);

  console.log("navigationData", navigationData);
  return (
    <nav className="tabbar">
      {navigationData &&
        navigationData.map((item: any, index: number) => (
          <span
            key={index}
            className={classNames([
              "tabItem",
              currentRoute === item && "tabItemActive",
            ])}
            onClick={() => setCurrentRoute(item)}
          >
            <span className="icon">{getTabIcon(item)}</span>
          </span>
        ))}
    </nav>
  );
};

export default Tabbar;

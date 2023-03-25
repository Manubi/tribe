import classNames from "classnames";
import { useRouter } from "next/router";
import { useCallback } from "react";
import { AiFillHome, AiFillPlusCircle, AiFillWallet } from "react-icons/ai";

const navigationData = ["/", "/create", "/wallet"];

const Tabbar = () => {
  const router = useRouter();
  const pathName = router.pathname;
  const getTabIcon = useCallback((pathName: string) => {
    switch (pathName) {
      case "/create":
        return <AiFillPlusCircle />;
      case "/wallet":
        return <AiFillWallet />;
      case "/":
        return <AiFillHome />;
    }
  }, []);

  console.log("pathName", pathName);
  return (
    <nav className="tabbar">
      {navigationData &&
        navigationData.map((item: any, index: number) => (
          <span
            key={index}
            className={classNames([
              "tabItem",
              pathName === item && "tabItemActive",
            ])}
            onClick={() => router.push(item)}
          >
            <span className="icon">{getTabIcon(item)}</span>
          </span>
        ))}
    </nav>
  );
};

export default Tabbar;

import classNames from "classnames";
import { useRouter } from "next/router";
import { useCallback } from "react";
import { AiFillBook, AiFillCompass, AiFillHome } from "react-icons/ai";

const navigationData = ["/", "/invite", "/history"];

const Tabbar = () => {
  const router = useRouter();
  const pathName = router.pathname;
  const getTabIcon = useCallback((pathName: string) => {
    switch (pathName) {
      case "/invite":
        return <AiFillCompass />;
      case "/history":
        return <AiFillBook />;
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

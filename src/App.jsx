import React from "react";
import Home from "./components/Home/Home";
import SideCart from "./components/SideCart/SideCart";

const App = () => {
  const handleWatchTime = (time) => {
    const previousWatchTime = localStorage.getItem("watchTime");
    if (previousWatchTime) {
      const totalWatchTime = +previousWatchTime + time;
      localStorage.setItem("watchTime", totalWatchTime);
    } else {
      localStorage.setItem("watchTime", time);
    }
  };
  return (
    <>
      <div className="flex w-4/5 mx-auto gap-4">
        <div className="border-2 flex-grow-[10]">
          <Home handleWatchTime={handleWatchTime}></Home>
        </div>
        <div className="flex-grow-[5] border-2 text-center">
          <SideCart></SideCart>
        </div>
      </div>
    </>
  );
};

export default App;

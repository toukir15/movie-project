import React from "react";
import Home from "./components/Home/Home";
import SideCart from "./components/SideCart/SideCart";

const App = () => {
  return (
    <>
      <div className="flex w-4/5 mx-auto gap-4">
        <div className="border-2 flex-grow-[10]">
          <Home></Home>
        </div>
        <div className="flex-grow-[5] border-2 text-center">
          <SideCart></SideCart>
        </div>
      </div>
    </>
  );
};

export default App;

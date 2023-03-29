import React, { useEffect, useState } from "react";

const SideCart = ({ watchTime }) => {
  const [totalTime, setTotalTime] = useState(watchTime);
  useEffect(() => {
    const getWatchTime = localStorage.getItem("watchTime");
    setTotalTime(getWatchTime);
  }, [watchTime]);

  return (
    <div>
      <h4>Total Watch Time: {totalTime}</h4>
    </div>
  );
};

export default SideCart;

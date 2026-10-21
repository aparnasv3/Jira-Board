import React, { useState } from "react";
import "./DrageArea.css";

const DrageArea = ({ onDrop }) => {
  const [showArea, setShowArea] = useState(false);
  return (
    <div
      className={showArea ? "show-box" : "hide-box"}
      onDragEnter={() => {
        setShowArea(true);
      }}
      onDragLeave={() => {
        setShowArea(false);
      }}
      onDrop={() => {
        onDrop();
        setShowArea(false);
      }}
      onDragOver={(e) => e.preventDefault()}
    >
      Drop Area
    </div>
  );
};

export default DrageArea;

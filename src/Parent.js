import React, { useState } from "react";
import { getRandomColor } from "./randomColorGenerator.js";
import Child from "./Child";

function Parent() {
  const randomColor = getRandomColor();
  const [color, setColor] = useState(randomColor);
  const [childColor, setChildColor] = useState("#FFF");

  function handleColor(childColor){
    let newColor = getRandomColor();
    setColor(newColor)
    setChildColor(childColor)
  }

  return (
    <div className="parent" style={{ backgroundColor: color }}>
      <Child color={childColor} onChangeColor={handleColor}/>
      <Child color={childColor} onChangeColor={handleColor}/>
    </div>
  );
}

export default Parent;

import React from "react";
import { MainPage, TimerObj, init } from "../index.js";

export function Button(i) {
  const onMouseEnter = (e) => {
    const index = e._targetInst.key.split("-")[1];
    clearInterval(TimerObj.getTimer());
    MainPage(index);
  };
  const onMouseLeave = (e) => {
    const index = e._targetInst.key.split("-")[1];
    TimerObj.setTimer(init(Number(index) + 1));
  };
  return React.createElement(
    "div",
    {
      className: "but",
      key: `button-${i}`,
      onMouseEnter: onMouseEnter,
      onMouseLeave: onMouseLeave,
    },
    i
  );
}

export function ButtonGroup(timer) {
  return React.createElement(
    "div",
    { className: "but-group" },
    [0, 1, 2].map((ele) => Button(ele, timer))
  );
}

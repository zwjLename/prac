import React from "react";
import ReactDOM from "react-dom";
import { ButtonGroup } from "./components/button.js";
import { Sliders } from "./components/sliders.js";

class Timer {
  constructor() {
    this.timer = 0;
  }
  getTimer() {
    return this.timer;
  }
  setTimer(timer) {
    this.timer = timer;
  }
}

export function MainPage(count) {
  return ReactDOM.render(
    React.createElement("div", { className: "container" }, [
      Sliders(count),
      ButtonGroup(TimerObj.getTimer()),
    ]),
    document.getElementById("app")
  );
}
export function Main(count) {
  return setInterval(() => {
    MainPage(count, TimerObj.getTimer());
    count++;
  }, 2000);
}
export function init(count) {
  return Main(count);
}
export const TimerObj = new Timer();
TimerObj.setTimer(init(0));

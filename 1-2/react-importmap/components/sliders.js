import React from "react";
import {Imgs} from "./imgs.js";


export function Sliders (i) {
    console.log('%c [ i ]', 'font-size:13px; background:pink; color:#bf2c9f;', i)
    return React.createElement('div', {className: 'pic-container', style: {position: 'absolute', left: -(i%3)*300, transition: 'left 400ms linear'}}, [Imgs(1), Imgs(2), Imgs(3)])
}
import React from "react";
export function Imgs(id) {
    return React.createElement("img", {src: `../img/pic${id}.png`, style: {width: 300, height:200}, key: id})
}
import React from "react";
import { useState } from "react";
export const Buttons = ({ handleOnClick }) => {
  const btns = [
    {
      level: "AC",
      clsName: "clear grey",
    },
    {
      level: "C",
      clsName: "clean grey",
    },
    {
      level: "/",
      clsName: "divide grey",
    },
    {
      level: "*",
      clsName: "multi orange",
    },
    {
      level: "+",
      clsName: "plus orange",
    },
    {
      level: "-",
      clsName: "minus orange",
    },
    {
      level: "7",
      clsName: "no-7 dark",
    },
    {
      level: "8",
      clsName: "no-8 dark",
    },
    {
      level: "9",
      clsName: "no-9 dark",
    },
    {
      level: "4",
      clsName: "no-4 dark",
    },
    {
      level: "5",
      clsName: "no-5 dark",
    },
    {
      level: "6",
      clsName: "no-6 dark",
    },
    {
      level: "1",
      clsName: "no-1 dark",
    },
    {
      level: "2",
      clsName: "no-2 dark",
    },
    {
      level: "3",
      clsName: "no-3 dark",
    },
    {
      level: "0",
      clsName: "no-0 dark",
    },
    {
      level: ".",
      clsName: "no-dot dark",
    },
    {
      level: "=",
      clsName: "no-ans orange",
    },
  ];
  return (
    <div className="items">
      {btns.map((btn, i) => {
        return (
          <button
            className={btn.clsName}
            key={i}
            onClick={() => handleOnClick(btn.level)}
          >
            {btn.level}
          </button>
        );
      })}
    </div>
  );
};

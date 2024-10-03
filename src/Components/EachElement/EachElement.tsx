import React from "react";
import css from "./EachElement.module.css";
import { Dashboard } from "../Dashboard/Dashboard";
import { useState } from "react";
export const EachElement = ({
  name,
  currentDay,
  yesterday,
  thisDayWeek,
}: {
  name: string;
  currentDay: number;
  yesterday: number;
  thisDayWeek: number;
}) => {
  const higherValue = Math.max(currentDay, yesterday);
  function color() {
    if (higherValue === currentDay && currentDay != yesterday) {
      return css.yesterdayField;
    } else if (currentDay === yesterday) {
      return css.yesterdayFieldGray;
    } else {
      return css.yesterdayFieldRed;
    }
  }

  function percentColor() {
    if (higherValue === currentDay && currentDay != yesterday) {
      return css.percent;
    } else if (currentDay === yesterday) {
      return css.percentGray;
    } else {
      return css.percentRed;
    }
  }

  const [open, setOpen] = useState(false);
  let percent = Math.round(((currentDay - yesterday) / yesterday) * 100);
  return (
    <div className={css.container}>
      <div className={css.nameField}>
        <span className={css.name}>{name}</span>
      </div>
      <div className={css.currentDayField}>
        <span className={css.currentDay}>{currentDay}</span>
      </div>
      <div className={color()}>
        <span className={css.yesterday}>{yesterday}</span>
        <span className={percentColor()}>{percent}%</span>
      </div>
      <div
        className={
          currentDay >= yesterday
            ? css.thisDayWeekFieldGreen
            : css.thisDayWeekField
        }
      >
        <span className={css.thisDayWeek}>{thisDayWeek}</span>
      </div>
      <div>{/* dropdown content - dashboard */}</div>
    </div>
  );
};

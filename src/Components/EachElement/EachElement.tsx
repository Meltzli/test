import css from "./EachElement.module.css";
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";

const data = [
  { name: "1", uv: 400 },
  { name: "2", uv: 500 },
  { name: "3", uv: 900 },
  { name: "4", uv: 700 },
  { name: "5", uv: 100 },
  { name: "6", uv: 500 },
  { name: "7", uv: 900 },
];

export const EachElement = ({
  name,
  currentDay,
  yesterday,
  thisDayWeek,
  onClick,
  isActive,
}: {
  name: string;
  currentDay: number;
  yesterday: number;
  thisDayWeek: number;
  onClick: () => void;
  isActive: boolean;
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

  let percent = Math.round(((currentDay - yesterday) / yesterday) * 100);

  return (
    <div className={css.wrapper}>
      <div className={css.row} onClick={onClick}>
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
      </div>
      <div className={css.graph}>
        {isActive && (
          <LineChart width={600} height={300} data={data}>
            <Line type="monotone" dataKey="uv" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="name" />
            <YAxis />
          </LineChart>
        )}
      </div>
    </div>
  );
};

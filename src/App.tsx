import React from "react";
import { EachElement } from "./Components/EachElement/EachElement";
export const App = () => (
  <div>
    <EachElement
      name={"Выручка, руб"}
      currentDay={4000}
      yesterday={2000}
      thisDayWeek={3000}
    />
    <EachElement
      name={"Наличные"}
      currentDay={300000}
      yesterday={300000}
      thisDayWeek={300000}
    />
    <EachElement
      name={"Безналичный рассчет"}
      currentDay={100000}
      yesterday={100000}
      thisDayWeek={100000}
    />
    <EachElement
      name={"Кредитные карты"}
      currentDay={105251}
      yesterday={105251}
      thisDayWeek={105251}
    />
    <EachElement
      name={"Средний чек, руб"}
      currentDay={1300}
      yesterday={900}
      thisDayWeek={900}
    />
    <EachElement
      name={"Средний гость, руб"}
      currentDay={1200}
      yesterday={800}
      thisDayWeek={800}
    />
    <EachElement
      name={"Удаления из чека (после оплаты), руб"}
      currentDay={1000}
      yesterday={1100}
      thisDayWeek={900}
    />
    <EachElement
      name={"Удаления из чека (до оплаты), руб"}
      currentDay={1300}
      yesterday={1300}
      thisDayWeek={900}
    />
    <EachElement
      name={"Количество чеков"}
      currentDay={34}
      yesterday={36}
      thisDayWeek={34}
    />
    <EachElement
      name={"Количество гостей"}
      currentDay={34}
      yesterday={36}
      thisDayWeek={32}
    />
  </div>
);

export default App;

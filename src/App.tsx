import { useState } from "react";
import { EachElement } from "./Components/EachElement/EachElement";
import { Header } from "./Components/Header/Header";
import data from "./data.json";

export const App = () => {
  const [openKey, setOpenKey] = useState("");

  return (
    <div>
      <Header />
      {Object.entries(data).map(([key, value]) => (
        <EachElement
          key={key}
          name={value.name}
          currentDay={value.currentDay}
          yesterday={value.yesterday}
          thisDayWeek={value.thisDayWeek}
          onClick={() => setOpenKey(key)}
          isActive={openKey === key}
        />
      ))}
    </div>
  );
};

export default App;

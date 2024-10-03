import css from "./Header.module.css";

export const Header = () => (
  <div className={css.container}>
    <div className={css.name}>
      <span className={css.text}>Показатель</span>
    </div>
    <div className={css.currentDay}>
      <span className={css.text}>Текущий день</span>
    </div>
    <div className={css.yesterday}>
      <span className={css.text}>Вчера</span>
    </div>
    <div className={css.thisDayWeek}>
      <span className={css.text}>Этот день недели</span>
    </div>
  </div>
);

import s from "./ScrollUp.module.scss";

const ScrollUp = () => {
  return (
    <div className={s.scrollup}>
      <div className={s.scrollup_wrapp}>
        <div className={s.scrollup_first}></div>
        <div className={s.scrollup_second}></div>
      </div>
    </div>
  );
};

export default ScrollUp;

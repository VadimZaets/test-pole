"use client";
import s from "./JoinButton.module.scss";
const JoinButton = ({ text, setActive }) => {
  return (
    <button className={s.button} onClick={() => setActive((prev) => !prev)}>
      {text}
    </button>
  );
};

export default JoinButton;

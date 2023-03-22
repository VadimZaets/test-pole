"use client";

import { useState } from "react";
import s from "./CustomSelect.module.scss";

const options = ["writer 1", "artist 2", "option 3", "option 4", "option 5"];

const CustomSelect = ({ label, values }) => {
  const [isOpen, setIsOpen] = useState(false);

  const onOptionClicked = (val) => () => {
    values.kind = val;
    setIsOpen(false);
  };
  const toggling = () => setIsOpen(!isOpen);
  return (
    <div>
      <p className={s.name}>Вид діяльності</p>
      <div className={s.container} onClick={toggling}>
        <div className={s.header}>{values.kind || label}</div>
        {isOpen && (
          <div className={s.list_container}>
            <ul className={s.drop_down_list}>
              {options.map((option) => (
                <li
                  className={s.drop_down_item}
                  key={Math.random()}
                  onClick={onOptionClicked(option)}
                >
                  <p className={s.drop_down_text}>{option}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
        <svg className={s.drop_down_icon}>
          <use href="/sprite.svg#shape"></use>
        </svg>
      </div>
    </div>
  );
};

export default CustomSelect;

import s from "./Loader.module.scss";

import { Montserrat } from "@next/font/google";
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["700"],
});

const Loader = () => {
  return (
    <div className={` ${montserrat.className} ${s.loader}`}>
      <div className={s.loader_wrapper}>
        <span className={s.loader_text_logo}>L</span>
        <span className={s.loader_text_logo}>E</span>
        <span className={s.loader_text_logo}>O</span>
        <span className={s.loader_text_logo}>P</span>
        <span className={s.loader_text}>Loading...</span>
      </div>
    </div>
  );
};

export default Loader;

import s from "./Loader.module.scss";

import { Montserrat } from "@next/font/google";
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["700"],
});

const Loader = () => {
  return (
    <div className={` ${montserrat.className} ${s.loader4}`}>
      <div className={s.loader4_wrapper}>
        <div className={s.loader4_wrapper_logo}>
          <span className={s.loader4_text_logo}>L</span>
          <span className={s.loader4_text_logo}>E</span>
          <span className={s.loader4_text_logo}>O</span>
          <span className={s.loader4_text_logo}>P</span>
        </div>
        <span className={s.loader4_text}>Loading...</span>
      </div>
    </div>
  );
};

export default Loader;

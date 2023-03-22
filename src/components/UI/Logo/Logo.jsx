import s from "./Logo.module.scss";

import { Montserrat } from "@next/font/google";
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["800"],
});

const Logo = ({ isLightBackground }) => {
  return (
    <div
      className={isLightBackground ? `${s.logo}` : `${s.logo} ${s.logo_white}`}
    >
      <div
        className={
          isLightBackground
            ? `${s.logo_wrapper} ${montserrat.className}`
            : `${s.logo_wrapper} ${s.logo_wrapper_white} ${montserrat.className}`
        }
      >
        <span className={s.logo_text_logo}>L</span>
        <span className={s.logo_text_logo}>E</span>
        <span className={s.logo_text_logo}>O</span>
        <span className={s.logo_text_logo}>P</span>
      </div>
      <div
        className={
          isLightBackground
            ? s.logo_wrapper_space
            : `${s.logo_wrapper_space} ${s.logo_wrapper_space_white}`
        }
      >
        <span className={s.logo_text}>creation</span>
        <span className={s.logo_text}>space</span>
      </div>
    </div>
  );
};

export default Logo;

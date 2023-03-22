import { languages } from "@/app/i18n/settings";
import Link from "next/link";
import Layout from "../layout/Layout";
import s from "./Header.module.scss";
import Logo from "../UI/Logo/Logo";
import { useEffect } from "react";

const changeLng = (lng) => {
  switch (lng) {
    case "en":
      return "English";
      break;
    default:
      return "Українська";
  }
};

const Header = ({ lng, t }) => {
  useEffect(() => {
    Boolean(localStorage.getItem("lng")) || localStorage.setItem("lng", lng);
  }, [lng]);
  return (
    <header className={s.header} id="home">
      <Layout>
        <div className={s.container}>
          <Logo isLightBackground={true} />
          <div className={s.wrapp}>
            <div className={s.wrapp_links}>
              <a href="#aboutUs" className={s.link}>
                {t("headerAboutUs")}
              </a>

              <a href="#function" className={s.link}>
                {t("headerWhyUs")}
              </a>

              <a href="#questions" className={s.link}>
                {t("headerQuestions")}
              </a>
            </div>

            <div className={s.select_container}>
              <div className={s.select_header}>{changeLng(lng)}</div>
              <div className={s.list_container}>
                <ul className={s.drop_down_list}>
                  {languages.map(
                    (lng) =>
                      lng !== t("appLng") && (
                        <li className={s.drop_down_item} key={lng}>
                          <Link
                            href={`/${lng}/preview`}
                            className={s.drop_down_text}
                            onClick={() => localStorage.setItem("lng", lng)}
                          >
                            {changeLng(lng)}
                          </Link>
                        </li>
                      )
                  )}
                </ul>
              </div>

              <div className={s.drop_down}>
                <div className={s.drop_down_wrapp}>
                  <div className={s.drop_down_first}></div>
                  <div className={s.drop_down_second}></div>
                </div>
              </div>
            </div>
          </div>

          <div className={s.wrapp_links_mob}>
            <a href="#aboutUs" className={s.link}>
              {t("headerAboutUs")}
            </a>

            <a href="#function" className={s.link}>
              {t("headerWhyUs")}
            </a>

            <a href="#questions" className={s.link}>
              {t("headerQuestions")}
            </a>
          </div>
        </div>
      </Layout>
    </header>
  );
};

export default Header;

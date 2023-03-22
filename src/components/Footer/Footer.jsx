import JoinButton from "@/components/UI/JoinButton/JoinButton";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Layout from "../layout/Layout";
import PoliceLicense from "../Preview/PoliceLicense/PoliceLicense";
import Logo from "../UI/Logo/Logo";
import Modal from "../UI/Modal/Modal";
import s from "./Footer.module.scss";
const Footer = ({ setActive, t }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <footer className={s.footer}>
      <Layout>
        <div className={s.top_section}>
          <div className={s.left_section}>
            <a href="#home">
              <Logo isLightBackground={false} />
            </a>
            <h3 className={s.social_title}>{t("footerSocialLinks")}</h3>
            <ul className={s.social_list}>
              <li className={s.social_item}>
                <Link
                  href="https://www.linkedin.com/in/pole-platform-493aa4269/"
                  target="_blank"
                  className={s.social_link}
                >
                  <svg className={s.social_icon}>
                    <use href="/sprite.svg#linkedin"></use>
                  </svg>
                </Link>
              </li>
              <li className={s.social_item}>
                <Link
                  href="https://www.facebook.com/profile.php?id=100090998741442"
                  target="_blank"
                  className={s.social_link}
                >
                  <svg className={s.social_icon}>
                    <use href="/sprite.svg#facebook"></use>
                  </svg>
                </Link>
              </li>
              <li className={s.social_item}>
                <Link
                  href="https://twitter.com/pole_platform"
                  target="_blank"
                  className={s.social_link}
                >
                  <svg className={s.social_icon}>
                    <use href="/sprite.svg#twitter"></use>
                  </svg>
                </Link>
              </li>
              <li className={s.social_item}>
                <Link
                  href="https://www.instagram.com/poleplatform/"
                  target="_blank"
                  className={s.social_link}
                >
                  <svg className={s.social_icon}>
                    <use href="/sprite.svg#instagram"></use>
                  </svg>
                </Link>
              </li>
            </ul>
          </div>
          <div className={s.right_section}>
            <h2 className={s.right_title}>{t("footerReady")}</h2>
            <p className={s.right_text}>{t("footerReadyText")}</p>
            <JoinButton text={t("showInterest")} setActive={setActive} />
            <div className={s.social_mob_wrapper}>
              <h3 className={s.social_title}>{t("footerSocialLinks")}</h3>
              <ul className={s.social_list}>
                <li className={s.social_item}>
                  <Link
                    href="https://www.linkedin.com/in/pole-platform-493aa4269/"
                    target="_blank"
                    className={s.social_link}
                  >
                    <svg className={s.social_icon}>
                      <use href="/sprite.svg#linkedin"></use>
                    </svg>
                  </Link>
                </li>
                <li className={s.social_item}>
                  <Link
                    href="https://www.facebook.com/profile.php?id=100090998741442"
                    target="_blank"
                    className={s.social_link}
                  >
                    <svg className={s.social_icon}>
                      <use href="/sprite.svg#facebook"></use>
                    </svg>
                  </Link>
                </li>
                <li className={s.social_item}>
                  <Link
                    href="https://twitter.com/pole_platform"
                    target="_blank"
                    className={s.social_link}
                  >
                    <svg className={s.social_icon}>
                      <use href="/sprite.svg#twitter"></use>
                    </svg>
                  </Link>
                </li>
                <li className={s.social_item}>
                  <Link
                    href="https://www.instagram.com/poleplatform/"
                    target="_blank"
                    className={s.social_link}
                  >
                    <svg className={s.social_icon}>
                      <use href="/sprite.svg#instagram"></use>
                    </svg>
                  </Link>
                </li>
              </ul>
            </div>
            <ul className={s.right_list}>
              <li className={s.right_item}>
                <Link href="*" className={s.right_link}>
                  {t("headerAboutUs")}
                </Link>
              </li>
              <li className={s.right_item}>
                <Link href="*" className={s.right_link}>
                  {t("headerWhyUs")}
                </Link>
              </li>
              <li className={s.right_item}>
                <Link href="*" className={s.right_link}>
                  {t("headerQuestions")}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </Layout>
      <div className={s.bottom_line}>
        <Layout>
          <div className={s.bottom_section}>
            <p className={s.bottom_text}>
              Copyright © Pole 2023·All Rights Reserved
            </p>
            <ul className={s.bottom_list}>
              <li className={s.bottom_item}>
                <Link
                  href="mailto:poleplatform2023@gmail.com"
                  className={s.bottom_link}
                >
                  poleplatform2023@gmail.com
                </Link>
              </li>
              <li className={s.bottom_item}>
                <button
                  onClick={() => setIsOpen(true)}
                  className={s.bottom_link}
                >
                  {t("footerPrivate")}
                </button>
              </li>
            </ul>
          </div>
        </Layout>
      </div>
      <Modal active={isOpen}>
        <PoliceLicense setIsOpen={setIsOpen} t={t} />
      </Modal>
    </footer>
  );
};

export default Footer;

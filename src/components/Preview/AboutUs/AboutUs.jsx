import Image from "next/image";
import s from "./AboutUs.module.scss";
import { motion, Variants } from "framer-motion";
const AboutUs = ({ t }) => {
  const Variants = {
    offscreen: {
      y: 300,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      rotate: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.5 }}
      id="aboutUs"
    >
      <motion.div variants={Variants} className={s.aboutus}>
        <div className={s.title_wrap}>
          <h2 className={s.title}>{t("aboutTitle")} </h2>
          <h2 className={`${s.title} ${s.title_desc}`}>&nbsp; - &nbsp; </h2>
          <h2 className={s.title}>{t("aboutTitleText")}</h2>
        </div>
        <p className={s.text}>{t("aboutText")}</p>
        <ul className={s.list}>
          <li className={s.list_item}>
            <Image src="/pen.png" alt="pen" width={41} height={41} />
            <h3 className={s.item_title}>{t("aboutCreateTitle")}</h3>
            <p className={s.item_text}>{t("abouteCreateText")}</p>
          </li>
          <li className={s.list_item}>
            <Image
              src="/binoculars.png"
              alt="binoculars"
              width={41}
              height={40}
            />
            <h3 className={s.item_title}>{t("abouteExploreTitle")}</h3>
            <p className={s.item_text}>{t("abouteExploreText")}</p>
          </li>
          <li className={s.list_item}>
            <Image
              src="/development.png"
              alt="development"
              width={41}
              height={40}
            />
            <h3 className={s.item_title}>{t("abouteEvolveTitle")}</h3>
            <p className={s.item_text}>{t("abouteEvolveText")}</p>
          </li>
        </ul>
      </motion.div>
    </motion.div>
  );
};

export default AboutUs;

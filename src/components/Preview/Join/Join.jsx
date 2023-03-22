import JoinButton from "@/components/UI/JoinButton/JoinButton";
import Image from "next/image";
import s from "./Join.module.scss";
import { motion, Variants } from "framer-motion";
const Join = ({ setActive, t }) => {
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
    >
      <motion.div variants={Variants} className={s.join}>
        <Image
          src="/line.png"
          alt="typewriter"
          width={146}
          height={121}
          className={` ${s.image_mob}`}
        />
        <div className={s.wrapp}>
          <h2 className={s.title}>{t("joinTitle")} </h2>
          <p className={s.text}>{t("joinText")}</p>

          <JoinButton text={t("showInterest")} setActive={setActive} />
        </div>
        <Image
          src="/typewriter.png"
          alt="typewriter"
          width={362}
          height={330}
          className={`${s.image}`}
        />
      </motion.div>
    </motion.div>
  );
};
export default Join;

import Image from "next/image";
import s from "./Function.module.scss";
import { motion, Variants } from "framer-motion";
const Function = ({ t }) => {
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
    <div className={s.function} id="function">
      <div className={` ${s.image_spiral}`}>
        <Image
          src="/spiral.png"
          alt="typewriter"
          fill
          style={{ objectFit: "fill", maxHeight: 380 }}
        />
      </div>
      <ul className={s.list}>
        <li>
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
          >
            <motion.div className={s.list_item} variants={Variants}>
              <div className={s.wrapp}>
                <h3 className={s.title}>{t("functionTypingTitle")}</h3>
                <div className={s.line_wrapp_t1}>
                  <Image
                    src="/yellow-left-line.png"
                    alt="shtrihi"
                    width={192}
                    height={20}
                    className={`${s.yellow_line}`}
                  />
                </div>
                <p className={s.text}>{t("functionTypingText")}</p>
              </div>
              <div className={s.img_wrapp}>
                <Image
                  src="/typing.png"
                  alt="typing"
                  fill
                  style={{ objectFit: "contain", maxHeight: 460 }}
                />
              </div>
            </motion.div>
          </motion.div>
        </li>
        <li>
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
          >
            <motion.div className={s.list_item} variants={Variants}>
              <div className={`${s.img_wrapp} ${s.img_wrapp_desc}`}>
                <Image
                  src="/landscape.png"
                  alt="landscape"
                  fill
                  style={{ objectFit: "contain", maxHeight: 440 }}
                />
              </div>
              <div className={s.wrapp}>
                <h3 className={s.title}>{t("functionLandscapeTitle")}</h3>
                <div className={s.line_wrapp_t2}>
                  <Image
                    src="/yellow-left-line.png"
                    alt="shtrihi"
                    width={192}
                    height={20}
                    className={`${s.yellow_line}`}
                  />
                </div>
                <p className={s.text}>{t("functionLandscapeText")}</p>
              </div>
              <div className={`${s.img_wrapp} ${s.img_wrapp_mob}`}>
                <Image
                  src="/landscape.png"
                  alt="landscape"
                  fill
                  style={{ objectFit: "contain", maxHeight: 440 }}
                />
              </div>
            </motion.div>
          </motion.div>
        </li>
        <li>
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
          >
            <motion.div className={s.list_item} variants={Variants}>
              <div className={s.wrapp}>
                <h3 className={s.title}>{t("functionPhotoTitle")}</h3>
                <div className={s.line_wrapp_t3}>
                  <Image
                    src="/yellow-left-line.png"
                    alt="shtrihi"
                    width={192}
                    height={20}
                    className={`${s.yellow_line}`}
                  />
                </div>
                <p className={s.text}>{t("functionPhotoText")}</p>
              </div>
              <div className={s.img_wrapp}>
                <Image
                  src="/photo-sharing.png"
                  alt="photo-sharing"
                  fill
                  style={{ objectFit: "contain", maxHeight: 440 }}
                />
              </div>
            </motion.div>
          </motion.div>
        </li>
      </ul>
      <div className={` ${s.image_zigzag}`}>
        <Image
          src="/zigzag.png"
          alt="typewriter"
          fill
          style={{ objectFit: "fill", maxHeight: 200 }}
        />
      </div>
    </div>
  );
};

export default Function;

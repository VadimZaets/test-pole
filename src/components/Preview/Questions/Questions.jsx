import Image from "next/image";
import s from "./Questions.module.scss";
import { useState } from "react";
import { GetQuestionsApi } from "@/api/fetchApi";
import Loader from "@/components/UI/LoaderCopy/Loader";
// const data = require("../../../../src/questions.json");
import { motion, Variants } from "framer-motion";

const createArray = (data) => {
  const array = [];
  for (let i = 0; i < 3; i = i + 1) {
    array.push(data[i]);
  }
  return array;
};

const Questions = ({ t }) => {
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
  const [all, setAll] = useState(false);
  const { isLoading, error, data, isFetching } = GetQuestionsApi();

  if (isLoading) return <Loader />;
  const questions = all ? [...data] : Boolean(data) && [...createArray(data)];
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.5 }}
      id="questions"
    >
      <motion.div variants={Variants} className={s.questions}>
        <div className={s.title_wrapp}>
          <h2 className={s.title}>{t("questionTitle")}</h2>
          <div className={s.line_wrapp}>
            <Image
              src="/yellow-line.png"
              alt="shtrihi"
              width={192}
              height={13}
              className={`${s.yellow_line}`}
            />
          </div>
        </div>
        {Boolean(error) && (
          <div>
            <p className={s.error_title}>{t("questionError")}</p>
            <Image
              src="/error.png"
              alt="error"
              width={70}
              height={70}
              className={s.picture}
            />
          </div>
        )}

        {Boolean(questions.length) && (
          <div>
            <div className={s.wrapp}>
              <ul className={s.faq}>
                {questions.map((question) => (
                  <li className={s.faq_item} key={Math.random()}>
                    <label className={s.faq_label}>
                      <input className={s.faq_input} type="checkbox" />
                      <p className={s.faq_title}>
                        {t("appLng") === "ua"
                          ? question.titleUA
                          : question.titleEn}
                      </p>
                      {(t("appLng") === "ua"
                        ? question.textUA.split("nextStr")
                        : question.textEn.split("nextStr")
                      ).map((el) => (
                        <p className={s.faq_text} key={Math.random()}>
                          {el}
                        </p>
                      ))}
                    </label>
                  </li>
                ))}
              </ul>
              <Image
                src="/shtrihi.png"
                alt="shtrihi"
                width={171}
                height={136}
                className={`${s.shtrihi}`}
              />
            </div>
            <button
              className={s.button}
              type="button"
              onClick={() => setAll((prev) => !prev)}
            >
              {!all ? t("questionShowAll") : t("questionLess")}
            </button>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default Questions;

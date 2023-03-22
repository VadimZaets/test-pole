import Image from "next/image";
import s from "./JoinSuccess.module.scss";

const JoinSuccess = ({ setActive, t, reset }) => {
  return (
    <div className={s.wrapper}>
      <div className={s.title_wrapp}>
        <h2 className={s.title}>{t("modalJoinSuccess")}</h2>
        <svg
          className={s.icon}
          onClick={() => {
            setActive(false);
            reset();
          }}
        >
          <use href="/sprite.svg#plus"></use>
        </svg>
      </div>
      <div className={s.text_wrapp}>
        <Image
          src="/star.png"
          alt="star"
          width={70}
          height={70}
          className={s.picture}
        />
        <p className={s.text}>{t("modalJoinSuccessText1")}</p>
        <p className={s.text}>{t("modalJoinSuccessText2")}</p>
      </div>
      <button
        className={s.btn}
        onClick={() => {
          setActive(false);
          reset();
        }}
      >
        {t("modalJoinSuccessBtn")}
      </button>
    </div>
  );
};

export default JoinSuccess;

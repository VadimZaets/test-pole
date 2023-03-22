import Image from "next/image";
import s from "./JoinError.module.scss";

const JoinError = ({ setActive, t, reset }) => {
  return (
    <div className={s.wrapper}>
      <div className={s.title_wrapp}>
        <h2 className={s.title}>{t("modalJoinError")}</h2>
        <svg
          className={s.icon}
          onClick={() => {
            setActive(false);
            return reset();
          }}
        >
          <use href="/sprite.svg#plus"></use>
        </svg>
      </div>
      <div className={s.text_wrapp}>
        <Image
          src="/error.png"
          alt="error"
          width={70}
          height={70}
          className={s.picture}
        />
        <p className={s.text}>{t("modalJoinErrorText")}</p>
      </div>
    </div>
  );
};

export default JoinError;

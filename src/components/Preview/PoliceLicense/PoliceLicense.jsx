import JoinButton from "@/components/UI/JoinButton/JoinButton";
import Logo from "@/components/UI/Logo/Logo";
import s from "./PoliceLicense.module.scss";

const PoliceLicense = ({ setIsOpen, t }) => {
  return (
    <div className={s.policelicense}>
      <div className={s.policelicense_wrapper}>
        <Logo isLightBackground={true} />
        <h3>{t("modalPrivateTitle")} </h3>
      </div>
      <div className={s.policelicense_text}>
        {t("modalPrivate")
          .split("nextStr")
          .map((el) => (
            <p className={s.policelicense_nextStr} key={Math.random()}>
              {el}
            </p>
          ))}
      </div>
      <JoinButton text={t("modalPrivateBtn")} setActive={setIsOpen} />
    </div>
  );
};

export default PoliceLicense;

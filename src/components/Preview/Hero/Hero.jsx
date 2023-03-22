import { useTranslation } from "@/app/i18n";
import JoinButton from "@/components/UI/JoinButton/JoinButton";
import Image from "next/image";
import s from "./Hero.module.scss";

const Hero = ({ setActive, t }) => {
  return (
    <div className={s.hero}>
      <div className={s.left_wrapp}>
        <div className={s.soon}>
          <p className={s.soon_text}>Coming soon</p>
        </div>
        <div className={s.title_wrapp}>
          <h2 className={s.title}>{t("heroHello")}</h2>
          <h2 className={s.title}>{t("heroTitle")}</h2>
        </div>
        <p className={s.text}>{t("heroText")}</p>
        <JoinButton text={t("showInterest")} setActive={setActive} />
      </div>

      <div className={s.picture_wrapper_mob}>
        <Image
          src="/woman-reading.png"
          alt="woman-reading"
          width={501}
          height={545}
          className={s.picture}
        />
      </div>
      <div className={s.picture_wrapper_desc}>
        <Image
          src="/woman-reading-desc.png"
          alt="woman-reading-desc"
          width={531}
          height={568}
          className={s.picture0}
        />
        <Image
          src="/cloud-small.png"
          alt="woman-reading"
          width={87}
          height={25}
          className={`${s.pictureall} ${s.picture1} `}
        />
        <Image
          src="/cloud-large.png"
          alt="woman-reading"
          width={137}
          height={38}
          className={`${s.pictureall} ${s.picture2} `}
        />
        <Image
          src="/cloud-large.png"
          alt="woman-reading"
          width={137}
          height={38}
          className={`${s.pictureall} ${s.picture3} `}
        />
      </div>
    </div>
  );
};

export default Hero;

import Hero from "@/components/Preview/Hero/Hero";
import Join from "@/components/Preview/Join/Join";
import AboutUs from "@/components/Preview/AboutUs/AboutUs";
import Function from "@/components/Preview/Function/Function";
import Questions from "@/components/Preview/Questions/Questions";
import { useTranslation } from "@/app/i18n/client";

const PreviewPage = ({ setActive, lng }) => {
  const { t } = useTranslation(lng, "preview");
  return (
    <>
      <Hero setActive={setActive} t={t} />
      <AboutUs t={t} />
      <Function t={t} />
      <Join setActive={setActive} t={t} />
      <Questions t={t} />
    </>
  );
};

export default PreviewPage;

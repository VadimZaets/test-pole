import {
  useAnimationControls,
  useScroll,
  Variants,
  motion,
} from "framer-motion";
import { useEffect } from "react";
import ScrollUp from "../ScrollUp/ScrollUp";
import s from "./ScrollToTop.module.scss";

const ScrollToTopButton = () => {
  const { scrollYProgress } = useScroll();
  const controls = useAnimationControls();
  useEffect(() => {
    return scrollYProgress.on("change", (latestValue) => {
      if (latestValue > 0.25) {
        controls.start("show");
      } else {
        controls.start("hide");
      }
    });
  });
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.button
      className={s.scrollToTop}
      variants={{ hide: { opacity: 0, y: 100 }, show: { opacity: 1, y: 0 } }}
      initial="hide"
      animate={controls}
      onClick={scrollToTop}
    >
      <ScrollUp />
      {/* <svg className={s.icon}>
        <use href="/sprite.svg#arrow-up"></use>
      </svg> */}
    </motion.button>
  );
};

export default ScrollToTopButton;

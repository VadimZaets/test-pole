import s from "./layout.module.scss";
const Layout = ({ children }) => (
  <>
    <section className={s.layout}>{children}</section>
  </>
);

export default Layout;

import LabelForm from "@/components/UI/LabelForm/LabelForm";
import { Formik } from "formik";
import s from "./ShowInterestForm.module.scss";

const ShowInterestForm = ({ addFollower, setActive, t }) => {
  return (
    <div className={s.showinterestform}>
      <Formik
        initialValues={{ name: "", email: "", vocation: "", lng: t("appLng") }}
        //   validationSchema={loginValidationSchema}

        onSubmit={async (values, { resetForm }) => {
          addFollower(values);
          await resetForm();
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <div className={s.wrapper}>
            <div className={s.title_wrapp}>
              <h2 className={s.title}>{t("showInterest")}</h2>
              <svg className={s.icon} onClick={() => setActive(false)}>
                <use href="/sprite.svg#plus"></use>
              </svg>
            </div>
            <form onSubmit={handleSubmit} className={s.form}>
              <LabelForm
                label={t("modalShowInterestName")}
                type="text"
                name="name"
                placeholder={t("modalShowInterestNamePlaceholder")}
                handleChange={handleChange}
                handleBlur={handleBlur}
                values={values.name}
              />
              <LabelForm
                label={t("modalShowInterestEmail")}
                type="email"
                name="email"
                placeholder="lesyaukrainka@gmail.com"
                handleChange={handleChange}
                handleBlur={handleBlur}
                values={values.email}
              />
              <LabelForm
                label={t("modalShowInterestActivity")}
                type="text"
                name="vocation"
                placeholder={t("modalShowInterestActivityPlaceholder")}
                handleChange={handleChange}
                handleBlur={handleBlur}
                values={values.vocation}
              />
              {/* <CustomSelect
              label="Поетеса"
              value={values.kind}
              values={values}
            /> */}
              <button type="submit" className={s.btn}>
                {t("showInterest")}
              </button>
            </form>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default ShowInterestForm;

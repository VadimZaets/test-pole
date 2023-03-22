import { ErrorMessage } from "formik";
import s from "./sass/LabelForm.module.scss";

const LabelForm = ({
  type,
  name,
  placeholder,
  handleChange,
  handleBlur,
  values,
  label,
}) => {
  return (
    <>
      <label className={s.inputLabel} htmlFor={name}>
        <p className={s.name}>{label}</p>
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          onChange={handleChange}
          onBlur={handleBlur}
          value={values}
        />
        <ErrorMessage component="div" name={name} className={s.errorMessage} />
      </label>
    </>
  );
};

export default LabelForm;

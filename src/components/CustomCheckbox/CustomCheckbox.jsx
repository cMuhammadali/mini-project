import CustomLabel from "../CustomLabel/CustomLabel";
import { useField } from "formik";

export default function CustomCheckbox({ label, ...props }) {
  const [field, meta] = useField(props);

  return (
    <>
      <CustomLabel meta={meta}>{label}</CustomLabel>
      <div>
        <input
          {...field}
          {...props}
          className={
            meta.touched && meta.error
              ? "border-2 border-red-600 p-2 mr-2 rounded-md m-2"
              : "p-2 mr-2 rounded-md m-2"
          }
        />
        <span>I accept the terms of service</span>
      </div>
    </>
  );
}

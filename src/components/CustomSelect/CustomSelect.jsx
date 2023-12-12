import CustomLabel from "../CustomLabel/CustomLabel";
import { useField } from "formik";

export default function CustomSelect({ label, ...props }) {
  const [field, meta] = useField(props);

  return (
    <>
      <CustomLabel meta={meta}>{label}</CustomLabel>
      <select
        {...field}
        {...props}
        className={
          meta.touched && meta.error
            ? "border-2 border-red-600 p-2 mr-2 rounded-md w-48"
            : "p-2 mr-2 rounded-md w-48"
        }
      />
    </>
  );
}

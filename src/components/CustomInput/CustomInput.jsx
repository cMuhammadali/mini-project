import { useField } from "formik";

export default function CustomInput({ label, ...props }) {
  const [field, meta] = useField(props);

  return (
    <>
      <label className="mr-2 text-xl">{label}</label>
      {meta.touched && meta.error && (
        <div className="text-red-600 m-2">{meta.error}</div>
      )}
      <input
        {...field}
        {...props}
        className={
          meta.touched && meta.error
            ? "border-2 border-red-600 p-2 mr-2 rounded-md"
            : "p-2 mr-2 rounded-md"
        }
      />
    </>
  );
}

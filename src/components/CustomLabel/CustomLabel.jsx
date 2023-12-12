export default function CustomLabel({ children, meta }) {
  return (
    <div>
      {children ? <label className="mr-2 text-xl">{children}</label> : null}
      {meta.touched && meta.error && (
        <div className="text-red-600 m-2">{meta.error}</div>
      )}
    </div>
  );
}

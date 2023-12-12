import CustomCheckbox from "../components/CustomCheckbox/CustomCheckbox";
import CustomInput from "../components/CustomInput/CustomInput";
import CustomSelect from "../components/CustomSelect/CustomSelect";
import { advancedSchema } from "../validation/Validate";
import { Field, Form, Formik } from "formik";

export default function FormikFunc() {
  const handleSubmit = async (values, actions) => {
    console.log("values", values);

    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();
  };

  return (
    <>
      <Formik
        initialValues={{ username: "", jobType: "", acceptedTodos: false }}
        onSubmit={handleSubmit}
        validationSchema={advancedSchema}
      >
        {(props) => (
          <Form>
            <CustomInput
              label="Username"
              name="username"
              type="text"
              placeholder="Enter your username"
              className="p-2 mr-2 rounded-md"
            />
            <CustomSelect
              label="Job Type"
              name="jobType"
              placeholder="Please select a job"
            >
              <option value="">Please select a job type</option>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="manager">Product manager</option>
              <option value="other">Other</option>
            </CustomSelect>
            <CustomCheckbox type="checkbox" name="acceptedTodos" />
            <button type="submit" className="ml-2 border-2 border-slate-300">
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
}

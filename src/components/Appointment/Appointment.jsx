import Css from "./Appointment.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
// import { useDispatch } from "react-redux";

const Appointment = ({ data = {} }) => {
  console.log("Appointment data:", data);
  return (
    <div className={Css.Appointment}>
      <div className={Css.Header}>
        <h2 className={Css.Title}>Make an appointment with a babysitter</h2>
        <p className={Css.Description}>
          Arranging a meeting with a caregiver for your child is the first step
          to creating a safe and comfortable environment. Fill out the form
          below so we can match you with the perfect care partner.
        </p>
      </div>
      <Formik
      // initialValues={{
      //   email: "",
      //   password: "",
      // }}
      // validationSchema={Yup.object({
      //   email: Yup.string()
      //     .email("Invalid email format")
      //     .required("Required"),
      //   password: Yup.string()
      //     .min(6, "Minimum 6 characters")
      //     .required("Required"),
      // })}
      // onSubmit={(values, actions) => {
      //   console.log("Form data", values);
      //   console.log("Actions", actions);
      //   dispatch(loginUser(values));
      // }}
      >
        <Form className={Css.Form}>
          <div className={Css.Group}>
            <Field
              type="email"
              name="email"
              placeholder="Email"
              className={Css.Input}
            />
            <ErrorMessage name="email" component="span" className={Css.Error} />
          </div>
          <div className={Css.Group}>
            <Field
              type="password"
              name="password"
              placeholder="Password"
              className={Css.Input}
            />
            <ErrorMessage
              name="password"
              component="span"
              className={Css.Error}
            />
          </div>
          <button type="submit" className={Css.Button}>
            Log In
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default Appointment;

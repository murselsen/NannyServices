import Css from "./Registration.module.css";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
const Registration = () => {
  return (
    <div className={Css.Registration}>
      <div className={Css.Header}>
        <h2 className={Css.Title}>Registration</h2>
        <p className={Css.Description}>
          Thank you for your interest in our platform! In order to register, we
          need some information. Please provide us with the following
          information.
        </p>
      </div>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .min(2, "Minimum 2 characters")
            .required("Required"),
          email: Yup.string()
            .email("Invalid email format")
            .required("Required"),
          password: Yup.string()
            .min(6, "Minimum 6 characters")
            .required("Required"),
        })}
      >
        <Form className={Css.Form}>
          <div className={Css.Group}>
            <Field
              type="text"
              name="name"
              placeholder="Name"
              className={Css.Input}
            />
            <ErrorMessage name="name" component="span" className={Css.Error} />
          </div>
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
            Sign Up
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default Registration;

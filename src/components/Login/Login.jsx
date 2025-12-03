import Css from "./Login.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";

import { loginUser } from "../../redux/auth/thunks.js";

const Login = () => {
  const dispatch = useDispatch();
  return (
    <div className={Css.Login}>
      <div className={Css.Header}>
        <h2 className={Css.Title}>Log In</h2>
        <p className={Css.Description}>
          Welcome back! Please enter your credentials to access your account and
          continue your babysitter search.
        </p>
      </div>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email("Invalid email format")
            .required("Required"),
          password: Yup.string()
            .min(6, "Minimum 6 characters")
            .required("Required"),
        })}
        onSubmit={(values, actions) => {
          console.log("Form data", values);
          console.log("Actions", actions);
          dispatch(loginUser(values));
        }}
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

export default Login;

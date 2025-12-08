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
      <div className={Css.Profile}>
        <img src={data.avatar_url} className={Css.Image} alt={data.name} />
        <div className={Css.Info}>
          <div className={Css.Sub}>Your Nanny</div>
          <div className={Css.Name}>{data.name}</div>
        </div>
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
          <div className={Css.RowGroup}>
            <div className={Css.Group}>
              <Field
                type="text"
                name="address"
                placeholder="Address"
                className={Css.Input}
              />
              <ErrorMessage
                name="address"
                component="span"
                className={Css.Error}
              />
            </div>
            <div className={Css.Group}>
              <Field
                type="tel"
                name="phone"
                placeholder="Phone Number"
                className={Css.Input}
              />
              <ErrorMessage
                name="phone"
                component="span"
                className={Css.Error}
              />
            </div>
          </div>

          <div className={Css.RowGroup}>
            <div className={Css.Group}>
              <Field
                type="number"
                name="childAge"
                placeholder="Child Age"
                className={Css.Input}
              />
              <ErrorMessage
                name="childAge"
                component="span"
                className={Css.Error}
              />
            </div>
            <div className={Css.Group}>
              <Field
                type="time"
                name="appointmentTime"
                placeholder="Time"
                className={Css.Input}
                style={{ width: "100%" }}
              />
              <ErrorMessage
                name="appointmentTime"
                component="span"
                className={Css.Error}
              />
            </div>
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
              type="text"
              name="parentName"
              placeholder="Father's or Mother's Name"
              className={Css.Input}
            />
            <ErrorMessage
              name="parentName"
              component="span"
              className={Css.Error}
            />
          </div>
          <div className={Css.Group}>
            <Field
              as="textarea"
              name="comment"
              placeholder="Comment"
              className={Css.Input}
            />
            <ErrorMessage
              name="comment"
              component="span"
              className={Css.Error}
            />
          </div>
          <button type="submit" className={Css.Button}>
            Send
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default Appointment;

import { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { RegisterFormType } from "../@types";
import AuthContext from "../context/AuthContext";
import * as Yup from "yup";
import { Form, Formik } from "formik";

const Register = () => {
  //prevent double submit:
  const [isLoading, setIsLoading] = useState(false);
  const { isLoggedIn } = useContext(AuthContext);

  const initialValues: RegisterFormType = {
    username: "",
    email: "",
    password: "",
  };

  //Validations:
  const validationSchema = Yup.object({
    username: Yup.string().min(3).required(),
    email: Yup.string().email("must be a valid email").min(3).required(),
    password: Yup.string().min(3, "Password is to short").required(),
  });

  //if all is valid=> this method is invoked
  const handleRegister = (formValues: RegisterFormType) => {
    alert(JSON.stringify(formValues));
  };
  if (isLoggedIn) {
    return <Navigate to="/" />;
  }
  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={handleRegister}
        validationSchema={validationSchema}
      >
        <Form className="w-50 mx-auto">
          <div>
            <label htmlFor="username" className="form-label">
              User Name
            </label>
            <input type="text" className="form-control" id="username" />
            <div className="alert alert-danger">Name too short</div>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default Register;
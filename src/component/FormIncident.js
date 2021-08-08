// Render Prop
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { useHistory } from "react-router-dom";

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .required('Required'),
  lastName: Yup.string()
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  address: Yup.string().required('Required'),
  phone: Yup.number().required('Required'),
  details: Yup.string()
     .min(50, 'Too Short!')
     .max(200, 'Too Long!')
     .required('Required'),
  checked: Yup.bool().oneOf([true], 'Accept Terms & Conditions is required'),
});


const Basic = () => { 
  let history = useHistory();
  return (
  <div>
    <h1>Any place in your app!</h1>
    <Formik
      initialValues={{ firstName: "", lastName: "", address: "", phone: "", details: "", email: '', checked: false  }}
      validationSchema={SignupSchema}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          history.push({
            pathname: "/thank-you",
            state: { some: values }
          });
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <label>FirstName</label> 
          <Field type="text" name="firstName" />
          <ErrorMessage name="firstName" component="div" />
          <br/>

          <label>Lastname</label>
          <Field type="text" name="lastName" />
          <ErrorMessage name="lastName" component="div" />
          <br/>

          <label>Address</label>
          <Field type="text" name="address" />
          <ErrorMessage name="address" component="div" />
          <br/>

          <label>Phone</label>
          <Field type="number" name="phone" />
          <ErrorMessage name="phone" component="div" />
          <br/>

          <label>Details</label>
          <Field type="text" name="details" />
          <ErrorMessage name="details" component="div" />
          <br/>

          <label>Mail</label>
          <Field type="email" name="email" />
          <ErrorMessage name="email" component="div" />
          <br/>

          <label>Gizlilik koşullarını kabul ediyorum</label>
          <Field type="checkbox" name="checked" />
          <ErrorMessage name="checked" component="div" />
          <br/>

          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  </div>
)}

export default Basic;
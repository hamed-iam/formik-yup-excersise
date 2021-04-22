import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as yup from 'yup';

const initialValues = {
  name: '',
  email: '',
  page: '',
};

const onSubmit = (values) => {
  console.log(values);
};

const validationSchema = yup.object({
  name: yup.string().required('required'),
  email: yup.string().email().required('required'),
  page: yup.string().required('required'),
});

const PageForm = () => {
  return (
    <div className="form-container">
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form className="form">
          <label htmlFor="name">Name</label>
          <Field name="name" id="name" />
          <ErrorMessage name="name" />

          <label htmlFor="email">E-mail</label>
          <Field name="email" id="email" />
          <ErrorMessage name="email" />

          <label htmlFor="page">Page</label>
          <Field name="page" id="page" />
          <ErrorMessage name="page" />
          <button type="submit"> submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default PageForm;

import { useFormik } from 'formik';
import * as Yup from 'yup';

const initialValues = {
  name: '',
  email: '',
  page: '',
};

const onSubmit = (values) => {
  console.log(values);
};

const validationSchema = Yup.object({
  name: Yup.string().required('Please Enter Your Name'),
  email: Yup.string()
    .email('Invalid Email !')
    .required('Please Enter Your Email'),
  page: Yup.string().required('Please Enter Page Name'),
});

const OldForm = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  return (
    <div className="form-container">
      <form onSubmit={formik.handleSubmit} className="form">
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.name && formik.errors.name && (
            <div className="error">{formik.errors.name}</div>
          )}
        </div>
        <div className="form-control">
          <label htmlFor="email">email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email && (
            <div className="error"> {formik.errors.email}</div>
          )}
        </div>
        <div className="form-control">
          <label htmlFor="page">page</label>
          <input
            type="text"
            name="page"
            id="page"
            value={formik.values.page}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.page && formik.errors.page && (
            <div className="error"> {formik.errors.page}</div>
          )}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default OldForm;

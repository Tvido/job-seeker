import { Formik } from 'formik';
import { FiSend } from 'react-icons/fi';

import s from './LoginForm.module.css';

export const LoginForm = () => {
  return (
    <Formik
      initialValues={{
        formEmail: '',
        formPass: '',
      }}
      onSubmit={(values, { resetForm }) => {
        console.log('values', { ...values });
        resetForm();
        // setSubmitting(false);
      }}
    >
      {({ values, handleChange, handleBlur, handleSubmit }) => (
        <form action="" className={s.container} onSubmit={handleSubmit}>
          <h1 className={s.title}>PLEASE LOGIN</h1>
          <div className={s.inputs}>
            <div>
              <div className={s.content}>
                <input
                  id="formEmail"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.formEmail}
                  type="email"
                  name="formEmail"
                  autoComplete="off"
                  placeholder=" "
                  className={s.input}
                />
                <label htmlFor="formEmail" className={s.label}>
                  * Email
                </label>
              </div>

              <div className={s.content}>
                <input
                  id="formPass"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.formPass}
                  type="password"
                  name="formPass"
                  autoComplete="off"
                  placeholder=" "
                  className={s.input}
                />
                <label htmlFor="formPass" className={s.label}>
                  * Pass
                </label>
              </div>
            </div>
          </div>

          <div className="">
            <button type="submit" id="button" className="">
              НАДІСЛАТИ
              <FiSend />
            </button>
          </div>
        </form>
      )}
    </Formik>
  );
};

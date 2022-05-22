import { Formik } from 'formik';
import { FiSend } from 'react-icons/fi';

// import * as yup from 'yup';

import s from './AuthFormRecruiter.module.css';

export const AuthFormRecruiter = () => {
  return (
    <div>
      <Formik
        initialValues={{
          formCompanyName: '',
          formName: '',
          formEmail: '',
          formPass: '',
          formConfPass: '',
        }}
        onSubmit={values => {
          console.log('values', { ...values, roles: 'recruiter' });
          // setSubmitting(false);
        }}
      >
        {({ values, handleChange, handleBlur, handleSubmit }) => (
          <form action="" className={s.container} onSubmit={handleSubmit}>
            <h1 className={s.title}>PLEASE REGISTER</h1>
            <div className={s.inputs}>
              <div className={s.content}>
                <input
                  id="formCompanyName"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.formCompanyName}
                  type="email"
                  name="formCompanyName"
                  autoComplete="off"
                  placeholder=" "
                  className={s.input}
                />
                <label htmlFor="formCompanyName" className={s.label}>
                  * Company Name
                </label>
              </div>

              <div className={s.content}>
                <input
                  id="formName"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.formName}
                  type="text"
                  name="formName"
                  autoComplete="off"
                  placeholder=" "
                  className={s.input}
                />
                <label htmlFor="formName" className={s.label}>
                  * Name
                </label>
              </div>

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
                  * gmail@gmail.com
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
                  * Password
                </label>
              </div>

              <div className={s.content}>
                <input
                  id="formConfPass"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.formConfPass}
                  type="password"
                  name="formConfPass"
                  autoComplete="off"
                  placeholder=" "
                  className={s.input}
                />
                <label htmlFor="formConfPass" className={s.label}>
                  * Confirm Password
                </label>
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
    </div>
  );
};

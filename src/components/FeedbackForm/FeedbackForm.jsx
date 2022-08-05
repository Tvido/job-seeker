import { Formik } from 'formik';
import { FiSend } from 'react-icons/fi';

import s from './FeedbackForm.module.css';

export const FeedbackForm = () => {
  return (
    <div>
      <Formik
        initialValues={{
          formName: '',
          formContactPhoneNumber: '',
          formEmail: '',
          formMessage: '',
        }}
        onSubmit={values => {
          console.log('values', { ...values });
          // setSubmitting(false);
        }}
      >
        {({ values, handleChange, handleBlur, handleSubmit }) => (
          <form action="" className={s.container} onSubmit={handleSubmit}>
            <h1 className={s.title}>FEEDBACK</h1>
            <div className={s.inputs}>
              <div>
                <p className={s.content}>Info</p>
                <div className={s.content}>
                  <input
                    id="formName"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.position}
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
                    id="formContactPhoneNumber"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.contactPhoneNumber}
                    type="tel"
                    name="formContactPhoneNumber"
                    autoComplete="off"
                    placeholder=" "
                    className={s.input}
                  />
                  <label htmlFor="formContactPhoneNumber" className={s.label}>
                    * Phone Number
                  </label>
                </div>

                <div className={s.content}>
                  <input
                    id="formEmail"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
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
                  <textarea
                    id="formMessage"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.message}
                    type="text"
                    name="formMessage"
                    autoComplete="off"
                    placeholder=" "
                    className={s.input}
                  ></textarea>
                  <label htmlFor="formMessage" className={s.label}>
                    * Description
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
    </div>
  );
};

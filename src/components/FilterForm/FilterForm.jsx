import { Formik, Field } from 'formik';
import { FiSend } from 'react-icons/fi';

import s from './FilterForm.module.css';

export const FilterForm = () => {
  return (
    <div>
      <Formik
        initialValues={{
          formCity: '',
        }}
        onSubmit={values => {
          console.log('values', { ...values });
          // setSubmitting(false);
        }}
      >
        {({ values, handleChange, handleBlur, handleSubmit }) => (
          <form action="" className={s.container} onSubmit={handleSubmit}>
            <h1 className={s.title}>FILTER</h1>
            <div className={s.inputs}>
              <div>
                <div className={s.content}>
                  <input
                    id="formCity"
                    type="text"
                    name="formCity"
                    autoComplete="off"
                    placeholder=" "
                    className={s.input}
                  />
                  <label htmlFor="formCity" className={s.label}>
                    * City
                  </label>
                </div>
              </div>

              <div>
                <p className={s.content}>Salary</p>

                <div
                  className={s.content}
                  role="group"
                  aria-labelledby="checkbox-group"
                >
                  <label>
                    <Field type="checkbox" name="checked" value="Min" />
                    ...-2000
                  </label>
                  <label>
                    <Field type="checkbox" name="checked" value="Regular" />
                    2001-3000
                  </label>
                  <label>
                    <Field type="checkbox" name="checked" value="Big" />
                    3001-4000
                  </label>
                  <label>
                    <Field type="checkbox" name="checked" value="Max" />
                    4000-...
                  </label>
                </div>
              </div>

              <div>
                <p className={s.content}>type of Employment</p>

                <div
                  className={s.content}
                  role="group"
                  aria-labelledby="checkbox-group"
                >
                  <label>
                    <Field type="checkbox" name="checked" value="FullTime" />
                    Full Time
                  </label>
                  <label>
                    <Field type="checkbox" name="checked" value="PartTime" />
                    Part Time
                  </label>
                  <label>
                    <Field type="checkbox" name="checked" value="Online" />
                    Online
                  </label>
                  <label>
                    <Field type="checkbox" name="checked" value="Temporary" />
                    Temporary
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

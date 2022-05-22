import { Formik, Field } from 'formik';
import { FiSend } from 'react-icons/fi';

import s from './OfferForm.module.css';

export const OfferForm = () => {
  return (
    <div>
      <Formik
        initialValues={{
          formPosition: '',
          formCompanyName: '',
          formContactPhoneNumber: '',
          formEmail: '',
          formCity: '',
          formSalaryMin: '',
          formSalaryMax: '',
          formMessage: '',
        }}
        onSubmit={values => {
          console.log('values', { ...values });
          // setSubmitting(false);
        }}
      >
        {({ values, handleChange, handleBlur, handleSubmit }) => (
          <form action="" className={s.container} onSubmit={handleSubmit}>
            <h1 className={s.title}>VACANCY</h1>
            <div className={s.inputs}>
              <div>
                <p className={s.content}>Info</p>
                <div className={s.content}>
                  <input
                    id="formPosition"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.position}
                    type="text"
                    name="formPosition"
                    autoComplete="off"
                    placeholder=" "
                    className={s.input}
                  />
                  <label htmlFor="formPosition" className={s.label}>
                    * Position
                  </label>
                </div>

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

              <div>
                <p className={s.content}>Contacts</p>

                <div className={s.content}>
                  <input
                    id="formCompanyName"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.companyName}
                    type="text"
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
                  <input
                    id="formCity"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.city}
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

                <div className={s.content}>
                  <input
                    id="formSalaryMin"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.salaryMin}
                    type="text"
                    name="formSalaryMin"
                    autoComplete="off"
                    placeholder=" "
                    className={s.input}
                  />
                  <label htmlFor="formSalaryMin" className={s.label}>
                    * Min
                  </label>
                </div>

                <div className={s.content}>
                  <input
                    id="formSalaryMax"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.salaryMax}
                    type="text"
                    name="formSalaryMax"
                    autoComplete="off"
                    placeholder=" "
                    className={s.input}
                  />
                  <label htmlFor="formSalaryMax" className={s.label}>
                    * Max
                  </label>
                </div>
              </div>

              <div>
                <p className={s.content}>Description</p>

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

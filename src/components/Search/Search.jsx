import { Formik } from 'formik';
import { BiSearchAlt } from 'react-icons/bi';

import s from './Search.module.css';

export const Search = () => {
  return (
    <div>
      <Formik
        initialValues={{
          formPosition: '',
          formCity: '',
        }}
        onSubmit={values => {
          console.log('values', { ...values });
          // setSubmitting(false);
        }}
      >
        {({ values, handleChange, handleBlur, handleSubmit }) => (
          <form action="" className={s.container} onSubmit={handleSubmit}>
            <h1 className={s.title}>SEARCH</h1>
            <div className={s.inputs}>
              <div>
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
            </div>

            <div className="">
              <button type="submit" id="button" className="">
                Пошук
                <BiSearchAlt />
              </button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

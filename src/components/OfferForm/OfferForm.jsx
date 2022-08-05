import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FiSend } from 'react-icons/fi';

import { createOffer } from 'redux/actions/offers';

import s from './OfferForm.module.css';

export const OfferForm = () => {
  const [offerData, setOfferData] = useState({
    formPosition: '',
    // formCheckbox: [],
    formCompanyName: '',
    formContactPhoneNumber: '',
    formEmail: '',
    formCity: '',
    formSalaryMin: '',
    formSalaryMax: '',
    formMessage: '',
  });

  const dispatch = useDispatch();
  // const offers = useSelector(state => state.offers);

  const handleSubmit = e => {
    e.preventDefault();

    // dispatch(createOffer(offers));
  };

  const handleChange = () => {};

  return (
    <div>
      <form action="" className={s.container} onSubmit={handleSubmit}>
        <h1 className={s.title}>VACANCY</h1>
        <div className={s.inputs}>
          <div>
            <p className={s.content}>Info</p>
            <div className={s.content}>
              <input
                id="formPosition"
                onChange={handleChange}
                value={offerData.formPosition}
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

            {/* <checkbox
              id="formCheckbox"
              className={s.content}
              role="group"
              aria-labelledby="checkbox-group"
            >
              <label>
                <input type="checkbox" name="checked" value="FullTime" />
                Full Time
              </label>
              <label>
                <input type="checkbox" name="checked" value="PartTime" />
                Part Time
              </label>
              <label>
                <input type="checkbox" name="checked" value="Online" />
                Online
              </label>
              <label>
                <input type="checkbox" name="checked" value="Temporary" />
                Temporary
              </label>
            </checkbox> */}
          </div>

          <div>
            <p className={s.content}>Contacts</p>

            <div className={s.content}>
              <input
                id="formCompanyName"
                onChange={handleChange}
                value={offerData.formCompanyName}
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
                value={offerData.formContactPhoneNumber}
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
                value={offerData.formEmail}
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
                value={offerData.formCity}
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
                value={offerData.formSalaryMin}
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
                value={offerData.formSalaryMax}
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
                value={offerData.formMessage}
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
    </div>
  );
};

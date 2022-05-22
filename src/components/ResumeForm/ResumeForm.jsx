import { FiSend } from 'react-icons/fi';

import s from './ResumeForm.module.css';

export const ResumeForm = () => {
  return (
    <div>
      <form action="" className={s.container}>
        <h1 className={s.title}>RESUME</h1>
        <div className={s.inputs}>
          <div>
            <p className={s.content}>Personal Info</p>

            <div className={s.content}>
              <input
                id="name"
                type="text"
                name="name"
                autoComplete="off"
                placeholder=" "
                className={s.input}
              />
              <label htmlFor="name" className={s.label}>
                * Name
              </label>
            </div>

            <div className={s.content}>
              <input
                id="birthDate"
                type="date"
                name="birthDate"
                autoComplete="off"
                placeholder=" "
                className={s.input}
              />
              {/* <label htmlFor="birthDate" className={s.label}>
                * Birth Date
              </label> */}
            </div>

            <div className={s.content}>
              <input
                id="formEmail"
                type="email"
                name="email"
                autoComplete="off"
                placeholder=" "
                className={s.input}
              />
              <label htmlFor="formEmail" className={s.label}>
                * Avatar
              </label>
            </div>
          </div>

          <div>
            <p className={s.content}>Contacts</p>

            <div className={s.content}>
              <input
                id="phoneNumber"
                type="tel"
                name="phoneNumber"
                autoComplete="off"
                placeholder=" "
                className={s.input}
              />
              <label htmlFor="phoneNumber" className={s.label}>
                * Phone Number
              </label>
            </div>

            <div className={s.content}>
              <input
                id="email"
                type="email"
                name="email"
                autoComplete="off"
                placeholder=" "
                className={s.input}
              />
              <label htmlFor="email" className={s.label}>
                * Email
              </label>
            </div>

            <div className={s.content}>
              <input
                id="city"
                type="text"
                name="city"
                autoComplete="off"
                placeholder=" "
                className={s.input}
              />
              <label htmlFor="city" className={s.label}>
                * City
              </label>
            </div>
          </div>

          <div>
            <p className={s.content}>Applying</p>

            <div className={s.content}>
              <input
                id="cityPrefer"
                type="text"
                name="cityPrefer"
                autoComplete="off"
                placeholder=" "
                className={s.input}
              />
              <label htmlFor="cityPrefer" className={s.label}>
                * City You Prefer
              </label>
            </div>

            <div className={s.content}>
              <input
                id="positionApplying"
                type="text"
                name="positionApplying"
                autoComplete="off"
                placeholder=" "
                className={s.input}
              />
              <label htmlFor="positionApplying" className={s.label}>
                * Position Applying
              </label>
            </div>
          </div>

          <div>
            <p className={s.content}>Skills</p>

            <div className={s.content}>
              <input
                id="companyName"
                type="text"
                name="companyName"
                autoComplete="off"
                placeholder=" "
                className={s.input}
              />
              <label htmlFor="companyName" className={s.label}>
                * Company Name
              </label>
            </div>

            <div className={s.content}>
              <input
                id="position"
                type="text"
                name="position"
                autoComplete="off"
                placeholder=" "
                className={s.input}
              />
              <label htmlFor="position" className={s.label}>
                * Position
              </label>
            </div>

            <div className={s.content}>
              <input
                id="dateWorkFrom"
                type="date"
                name="dateWorkFrom"
                autoComplete="off"
                placeholder=" "
                className={s.input}
              />
              {/* <label htmlFor="dateWorkFrom" className={s.label}>
                * Start Date
              </label> */}
            </div>

            <div className={s.content}>
              <input
                id="dateWorkTo"
                type="date"
                name="dateWorkTo"
                autoComplete="off"
                placeholder=" "
                className={s.input}
              />
              {/* <label htmlFor="dateWorkTo" className={s.label}>
                * End Date
              </label> */}
            </div>
          </div>

          <div>
            <p className={s.content}>Education</p>

            <div className={s.content}>
              <input
                id="university"
                type="text"
                name="university"
                autoComplete="off"
                placeholder=" "
                className={s.input}
              />
              <label htmlFor="university" className={s.label}>
                * University
              </label>
            </div>

            <div className={s.content}>
              <input
                id="educationLevel"
                type="text"
                name="educationLevel"
                autoComplete="off"
                placeholder=" "
                className={s.input}
              />
              <label htmlFor="educationLevel" className={s.label}>
                * Education Level
              </label>
            </div>

            <div className={s.content}>
              <input
                id="speciality"
                type="text"
                name="speciality"
                autoComplete="off"
                placeholder=" "
                className={s.input}
              />
              <label htmlFor="speciality" className={s.label}>
                * Speciality
              </label>
            </div>

            <div className={s.content}>
              <input
                id="dateStadyFrom"
                type="date"
                name="dateStadyFrom"
                autoComplete="off"
                placeholder=" "
                className={s.input}
              />
              {/* <label htmlFor="dateStadyFrom" className={s.label}>
                * Start Date
              </label> */}
            </div>

            <div className={s.content}>
              <input
                id="dateStadyTo"
                type="date"
                name="dateStadyTo"
                autoComplete="off"
                placeholder=" "
                className={s.input}
              />
              {/* <label htmlFor="dateStadyTo" className={s.label}>
                * End Date
              </label> */}
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

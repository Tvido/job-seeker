import { FiSend } from 'react-icons/fi';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import FileBase64 from 'react-file-base64';

import { createResume } from 'redux/actions/resumes';

import s from './ResumeForm.module.css';

export const ResumeForm = () => {
  const [resumeData, setResumeData] = useState({
    formName: '',
    formBirthDate: '',
    formAvatar: '',
    // formPhoneNumber: '',
    // formEmail: '',
    // formCity: '',
    // formCityPrefer: '',
    // formPositionApplying: '',
    // formCompanyName: '',
    // formPosition: '',
    // formDateStadyFrom: '',
    // formDateStadyTo: '',
    // formUniversity: '',
    // formEducationLevel: '',
    // formSpeciality: '',
    // formDateWorkFrom: '',
    // formDateWorkTo: '',
  });

  const dispatch = useDispatch();

  // const handleChange = e => {};

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(createResume(resumeData));
  };

  const clear = () => {};

  return (
    <div>
      <form action="" className={s.container} onSubmit={handleSubmit}>
        <h1 className={s.title}>RESUME</h1>
        <div className={s.inputs}>
          <div>
            <p className={s.content}>Personal Info</p>

            <div className={s.content}>
              <input
                id="formName"
                onChange={e =>
                  setResumeData({ ...resumeData, formName: e.target.value })
                }
                value={resumeData.formName}
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
                id="formBirthDate"
                onChange={e =>
                  setResumeData({
                    ...resumeData,
                    formBirthDate: e.target.value,
                  })
                }
                value={resumeData.formBirthDate}
                type="date"
                name="formBirthDate"
                autoComplete="off"
                placeholder=" "
                className={s.input}
              />
            </div>

            <div className="">
              <FileBase64
                type="file"
                multiple={false}
                onDone={({ base64 }) =>
                  setResumeData({ ...resumeData, formAvatar: base64 })
                }
              />
            </div>
            {/*
          </div>
          <div>
            <p className={s.content}>Contacts</p>

            <div className={s.content}>
              <input
                id="formPhoneNumber"
                onChange={e =>
                  setResumeData({
                    ...resumeData,
                    formPhoneNumber: e.target.value,
                  })
                }
                value={resumeData.formPhoneNumber}
                type="tel"
                name="formPhoneNumber"
                autoComplete="off"
                placeholder=" "
                className={s.input}
              />
              <label htmlFor="formPhoneNumber" className={s.label}>
                * Phone Number
              </label>
            </div>

            <div className={s.content}>
              <input
                id="formEmail"
                onChange={e =>
                  setResumeData({ ...resumeData, formEmail: e.target.value })
                }
                value={resumeData.formEmail}
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
                onChange={e =>
                  setResumeData({ ...resumeData, formCity: e.target.value })
                }
                value={resumeData.formCity}
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
            <p className={s.content}>Applying</p>

            <div className={s.content}>
              <input
                id="formCityPrefer"
                onChange={e =>
                  setResumeData({
                    ...resumeData,
                    formCityPrefer: e.target.value,
                  })
                }
                value={resumeData.formCityPrefer}
                type="text"
                name="formCityPrefer"
                autoComplete="off"
                placeholder=" "
                className={s.input}
              />
              <label htmlFor="formCityPrefer" className={s.label}>
                * City You Prefer
              </label>
            </div>

            <div className={s.content}>
              <input
                id="formPositionApplying"
                onChange={e =>
                  setResumeData({
                    ...resumeData,
                    formPositionApplying: e.target.value,
                  })
                }
                value={resumeData.formPositionApplying}
                type="text"
                name="formPositionApplying"
                autoComplete="off"
                placeholder=" "
                className={s.input}
              />
              <label htmlFor="formPositionApplying" className={s.label}>
                * Position Applying
              </label>
            </div>
          </div>

          <div>
            <p className={s.content}>Skills</p>

            <div className={s.content}>
              <input
                id="formCompanyName"
                onChange={e =>
                  setResumeData({
                    ...resumeData,
                    formCompanyName: e.target.value,
                  })
                }
                value={resumeData.formCompanyName}
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
                id="formPosition"
                onChange={e =>
                  setResumeData({ ...resumeData, formPosition: e.target.value })
                }
                value={resumeData.formPosition}
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
                id="formDateWorkFrom"
                onChange={e =>
                  setResumeData({
                    ...resumeData,
                    formDateWorkFrom: e.target.value,
                  })
                }
                value={resumeData.formDateWorkFrom}
                type="date"
                name="formDateWorkFrom"
                autoComplete="off"
                placeholder=" "
                className={s.input}
              />
            </div>

            <div className={s.content}>
              <input
                id="formDateWorkTo"
                onChange={e =>
                  setResumeData({
                    ...resumeData,
                    formDateWorkTo: e.target.value,
                  })
                }
                value={resumeData.formDateWorkTo}
                type="date"
                name="formDateWorkTo"
                autoComplete="off"
                placeholder=" "
                className={s.input}
              />
            </div>
          </div>

          <div>
            <p className={s.content}>Education</p>

            <div className={s.content}>
              <input
                id="formUniversity"
                onChange={e =>
                  setResumeData({
                    ...resumeData,
                    formUniversity: e.target.value,
                  })
                }
                value={resumeData.formUniversity}
                type="text"
                name="formUniversity"
                autoComplete="off"
                placeholder=" "
                className={s.input}
              />
              <label htmlFor="formUniversity" className={s.label}>
                * University
              </label>
            </div>

            <div className={s.content}>
              <input
                id="formEducationLevel"
                onChange={e =>
                  setResumeData({
                    ...resumeData,
                    formEducationLevel: e.target.value,
                  })
                }
                value={resumeData.formEducationLevel}
                type="text"
                name="formEducationLevel"
                autoComplete="off"
                placeholder=" "
                className={s.input}
              />
              <label htmlFor="formEducationLevel" className={s.label}>
                * Education Level
              </label>
            </div>

            <div className={s.content}>
              <input
                id="formSpeciality"
                onChange={e =>
                  setResumeData({
                    ...resumeData,
                    formSpeciality: e.target.value,
                  })
                }
                value={resumeData.formSpeciality}
                type="text"
                name="formSpeciality"
                autoComplete="off"
                placeholder=" "
                className={s.input}
              />
              <label htmlFor="formSpeciality" className={s.label}>
                * Speciality
              </label>
            </div>

            <div className={s.content}>
              <input
                id="formDateStadyFrom"
                onChange={e =>
                  setResumeData({
                    ...resumeData,
                    formDateStadyFrom: e.target.value,
                  })
                }
                value={resumeData.formDateStadyFrom}
                type="date"
                name="formDateStadyFrom"
                autoComplete="off"
                placeholder=" "
                className={s.input}
              />
            </div>

            <div className={s.content}>
              <input
                id="formDateStadyTo"
                onChange={e =>
                  setResumeData({
                    ...resumeData,
                    formDateStadyTo: e.target.value,
                  })
                }
                value={resumeData.formDateStadyTo}
                type="date"
                name="formDateStadyTo"
                autoComplete="off"
                placeholder=" "
                className={s.input}
              />
            </div> */}
          </div>
        </div>

        <div className="">
          <button type="submit" id="button" className="">
            НАДІСЛАТИ
            <FiSend />
          </button>

          <button id="button" className="" onClick={clear}>
            ОЧИСТИТИ
          </button>
        </div>
      </form>
    </div>
  );
};

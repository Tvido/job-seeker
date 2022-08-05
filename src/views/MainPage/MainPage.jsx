import { useDispatch } from 'react-redux';
import React, { useEffect } from 'react';

import { Section } from 'components/Section/Section';
import { FilterForm } from 'components/FilterForm/FilterForm';
import { OfferList } from 'components/OfferList/OfferList';
import { ResumeList } from 'components/ResumeList/ResumeList';

import offers from '../../assets/offers.json';
import candidates from '../../assets/candidates.json';
import { getResumes } from 'redux/actions/resumes';

export const MainPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getResumes());
  }, [dispatch]);

  return (
    <>
      <Section title="Filter Section">
        <FilterForm />
      </Section>

      {offers && (
        <Section title="Offers Section">
          <OfferList items={offers} />
        </Section>
      )}

      {candidates && (
        <Section title="Resumes Section">
          <ResumeList items={candidates} />
        </Section>
      )}
    </>
  );
};

import { OfferForm } from 'components/OfferForm/OfferForm';
import { ResumeForm } from 'components/ResumeForm/ResumeForm';
import { Section } from 'components/Section/Section';

export const ProfilePage = () => {
  return (
    <>
      <Section title="Resume Section">
        <ResumeForm />
      </Section>
      <Section title="Offer Section">
        <OfferForm />
      </Section>
    </>
  );
};

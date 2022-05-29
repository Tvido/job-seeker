import { Section } from 'components/Section/Section';
import { FilterForm } from 'components/FilterForm/FilterForm';
import { OfferList } from 'components/OfferList/OfferList';

// import offers from '../../assets/offers.json';
import offers from '../../assets/offers.json';

export const MainPage = () => {
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
    </>
  );
};

import { Section } from 'components/Section/Section';
import { Search } from 'components/Search/Search';
import { FilterForm } from 'components/FilterForm/FilterForm';

export const HomePage = () => {
  return (
    <>
      <Section title="Search Section">
        <Search />
      </Section>

      <Section title="Filter Section">
        <FilterForm />
      </Section>
    </>
  );
};

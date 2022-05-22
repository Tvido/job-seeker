// for reusable buttons - 02-1 [React 18] - События и состояние. 16.06.20 ---- 00.45.00

import { Routes, Route } from 'react-router-dom';

import { Header } from 'components/Header/Header';
import './App.css';

// import { SignUpPage } from 'views/SignUpPage/SignUpPage';

import { Section } from './components/Section/Section';
// import { LoginForm } from './components/LoginForm/LoginForm';
// import { ResumeForm } from './components/ResumeForm/ResumeForm';
// import { OfferForm } from './components/OfferForm/OfferForm';

// import { Button } from './components/Button/Button';

import { OfferList } from './components/OfferList/OfferList';
import offers from './assets/offers.json';

// import { ResumeList } from './components/ResumeList/ResumeList';
// import candidates from './assets/candidates.json';
import { Favorites } from 'components/Favorites/Favorites';
import { AuthPage } from 'views/AuthPage/AuthPage';
import { Search } from 'components/Search/Search';
// import { FeedbackForm } from 'components/FeedbackForm/FeedbackForm';
import { FilterForm } from 'components/FilterForm/FilterForm';
import { FavoritesList } from 'components/FavoritesList/FavoritesList';
import { FavoritesPage } from 'views/FavoritesPage/FavoritesPage';

export default function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Section title="Search Section">
                <Search />
              </Section>

              <Section title="Filter Section">
                <FilterForm />
              </Section>
            </>
          }
        ></Route>

        <Route
          path="/auth"
          element={
            <Section title="Auth Section">
              <AuthPage />
            </Section>
          }
        ></Route>

        <Route
          path="/main"
          element={
            <>
              <>
                <Section title="Filter Section">
                  <FilterForm />
                </Section>

                <Section title="Offers Section">
                  <OfferList items={offers} />
                </Section>
              </>
            </>
          }
        ></Route>

        <Route
          path="/favorites"
          element={
            <Section title="Favorites Section">
              <FavoritesPage />
            </Section>
          }
        ></Route>

        <Route
          path="/profile"
          element={<Section title="Profile Section"></Section>}
        ></Route>
      </Routes>

      {/* <Section title="Filter Section">
        <FilterForm />
      </Section> */}

      {/* <Section title="Feedback Section">
        <FeedbackForm />
      </Section> */}

      {/* <Section title="Search Section">
        <Search />
      </Section> */}

      {/* <Section title="Auth Section">
        <AuthPage />
      </Section> */}

      {/* <Section title="Favorites Section">
        <Favorites />
      </Section> */}

      {/* <Section title="Resume Section">
        <ResumeForm />
      </Section> */}

      {/* <Section title="Vacancy Section">
        <OfferForm />
      </Section> */}

      {/* <Section title="Offers Section">
        <OfferList items={offers} />
      </Section> */}

      {/* <Section title="Candidates Section">
        <ResumeList items={candidates} />
      </Section> */}

      {/* <Section>
        <SignUpPage />
      </Section> */}

      {/* <Section>
        <LoginForm />
      </Section> */}

      {/* <Section>
        <Button text="Signup" type="Signup" bg="regular" />
        <Button text="Delete" type="Delete" bg="danger" />
        <Button text="Signin" type="Signin" bg="disabled" />
        <Button text="Edit" type="Edit" bg="edit" />
      </Section> */}
    </div>
  );
}

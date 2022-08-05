// for reusable buttons - 02-1 [React 18] - События и состояние. 16.06.20 ---- 00.45.00
import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import './App.css';
import { HomePage } from 'views/HomePage/HomePage';
import { AuthPage } from 'views/AuthPage/AuthPage';
import { MainPage } from 'views/MainPage/MainPage';
import { FavoritesPage } from 'views/FavoritesPage/FavoritesPage';
import { ProfilePage } from 'views/ProfilePage/ProfilePage';
import { AppBar } from 'components/AppBar/AppBar';

import { getOffers } from './redux/actions/offers';
import { getResumes } from './redux/actions/resumes';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOffers);
  }, [dispatch]);

  useEffect(() => {
    dispatch(getResumes);
  }, [dispatch]);

  return (
    <div className="App">
      <AppBar />

      <Routes>
        <Route path="/" element={<HomePage />} exact="true"></Route>

        <Route path="/auth" element={<AuthPage />}></Route>

        <Route path="/main" element={<MainPage />}></Route>

        <Route path="/favorites" element={<FavoritesPage />}></Route>

        <Route path="/profile" element={<ProfilePage />}></Route>
      </Routes>

      {/* <Section>
        <Button text="Signup" type="Signup" bg="regular" />
        <Button text="Delete" type="Delete" bg="danger" />
        <Button text="Signin" type="Signin" bg="disabled" />
        <Button text="Edit" type="Edit" bg="edit" />
      </Section> */}
    </div>
  );
}

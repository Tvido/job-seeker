import { AuthFormEmployee } from 'components/AuthFormEmployee/AuthFormEmployee';
import React, { useState } from 'react';
import { AuthFormRecruiter } from '../AuthFormRecruiter/AuthFormRecruiter';

export const SignUpForm = () => {
  const [view, setView] = useState('user');
  return (
    <div className="App">
      <nav>
        <h3
          onClick={() => setView('user')}
          style={{ color: view === 'user' ? '#2798ab' : '' }}
        >
          User
        </h3>
        <h3
          onClick={() => setView('recruiter')}
          style={{ color: view === 'recruiter' ? '#2798ab' : '' }}
        >
          Recruiter
        </h3>
      </nav>
      {view === 'recruiter' ? <AuthFormRecruiter /> : <AuthFormEmployee />}
    </div>
  );
};

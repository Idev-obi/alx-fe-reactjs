/*import WelcomeMessage from './userProfile.jsx'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <WelcomeMessage />
    </>
  )
}

export default App;
// App.jsx
/*import React from 'react';
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';

const App = () => {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
};

export default App;*/


// src/App.jsx

/*import React from 'react';
import UserProfile from './components/UserProfile';

function App() {
  return (
    <div>
      <h1>User Profile</h1>
      <UserProfile name="Alice" age={25} bio="Loves hiking and photography" />
    </div>
  );
}

export default App;*/



// src/App.jsx

import React from 'react';
import { UserProvider } from './UserContext';
import ProfilePage from './components/ProfilePage';

function App() {
  const userData = {
    name: 'Alice',
    age: 25,
    bio: 'Loves hiking and photography',
  };

  return (
    <UserProvider value={userData}>
      <div>
        <h1>App</h1>
        <ProfilePage />
      </div>
    </UserProvider>
  );
}

export default App;




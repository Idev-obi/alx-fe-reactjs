/*import UserInfo from './UserInfo';

function ProfilePage({ userData }) {
  return <UserInfo userData={userData} />;
}

export default ProfilePage;*/
// src/components/ProfilePage.jsx

import React from 'react';
import UserDetails from './UserDetails';

function ProfilePage() {
  return (
    <div>
      <h1>Profile Page</h1>
      <UserDetails />
    </div>
  );
}

export default ProfilePage;

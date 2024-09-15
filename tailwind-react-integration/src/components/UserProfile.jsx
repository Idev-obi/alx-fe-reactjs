
import React from 'react';

const UserProfile = () => {
  return (
    <div className="container mx-auto p-4 sm:p-6 md:p-8 lg:p-12 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
      <div className="flex flex-col items-center">
          <img 
          src="profile.jpg" 
          alt="Profile Picture" 
          className="w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 rounded-full"
        />
        <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mt-4">
          User Name
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl mt-2 text-center">
          Brief description or bio goes here. This text will adjust based on screen size.
        </p>
      </div>
    </div>
  );
};

export default UserProfile;


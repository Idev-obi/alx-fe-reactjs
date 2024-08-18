// src/UserContext.js

import React, { createContext } from 'react';

// Create Context
const UserContext = createContext();

// Export the context and a provider component
export const UserProvider = UserContext.Provider;
export default UserContext;

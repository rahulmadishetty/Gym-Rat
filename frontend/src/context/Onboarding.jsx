

import React, { createContext, useState } from 'react';

const OnboardingContext = createContext();

const Onboardingprovider = ({ children }) => {
  const [onboardingData, setOnboardingData] = useState(null);
  const [token, setToken] = useState(null);
  const [userId, setUserId] = useState(null)

  const handleOnChange = (name, value) => {
    setOnboardingData((prev) => {
      return { ...prev, [name]: value }
    })
  }

  const login = (token, userId) => {
    setToken(token)
    setUserId(userId)
    localStorage.setItem("token", token)
    localStorage.setItem("userId", userId)
  }

  return (
    <OnboardingContext.Provider value={{ setOnboardingData, onboardingData, handleOnChange, login, token, userId }}>
      {children}
    </OnboardingContext.Provider>
  );
};

export { OnboardingContext, Onboardingprovider };

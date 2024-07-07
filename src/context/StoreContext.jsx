import React, { createContext, useState } from "react";

import config from "../config";

const globalStoreLinks = {
  US: config.dr.usStore,
  FR: config.dr.frStore,
  JP: config.dr.jpStore,
};

const StoreContext = createContext();

const getCountryFromLocale = (locale) => {
  if (locale == "ja" || locale == "JA") {
    return "JP";
  }
  // Split the locale string by '-'
  const parts = locale.split("-");

  // The country code is typically the second part
  const countryCode = parts.length > 1 ? parts[1] : "";

  // Return the country name from the mapping object
  return countryCode || "US";
};

export const StoreProvider = ({ children }) => {
  const currentLocale = navigator.language;
  const [country, setCountry] = useState(getCountryFromLocale(currentLocale));

  const defaultStore = globalStoreLinks[getCountryFromLocale(currentLocale)];

  const [store, setStore] = useState(defaultStore);

  const chooseStore = (c) => {
    setCountry(c);
    setStore(globalStoreLinks[c]);
  };

  return (
    <StoreContext.Provider
      value={{
        store,
        country,
        chooseStore,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContext;

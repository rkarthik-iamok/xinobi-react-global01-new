import React, { useState, useEffect } from "react";

function BrowserLocale() {
  const [locale, setLocale] = useState("");
  const [locales, setLocales] = useState("");
  useEffect(() => {
    const userLocale = navigator.language || navigator.userLanguage;
    const userLocales = navigator.languages || [userLocale];

    setLocale(userLocale);
    setLocales(JSON.stringify(userLocales));
  }, []);
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Default Browser Locale</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{locale}</td>
          </tr>
        </tbody>
      </table>
      <table>
        <thead>
          <tr>
            <th>Available Browser Locale</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{locales}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default BrowserLocale;

import React, { useState } from 'react';
import 'react-phone-number-input/style.css';
import { getCountries, getCountryCallingCode } from 'react-phone-number-input/input';
import en from 'react-phone-number-input/locale/en.json';

export default function Example() {
  const [country, setCountry] = useState();
  return (
    <select value={country} onChange={(event) => setCountry(event.target.value || undefined)}>
      <option value=''>{en['KR']}</option>
      {getCountries().map((country) => (
        <option key={country} value={country}>
          {en[country]} +{getCountryCallingCode(country)}
        </option>
      ))}
    </select>
  );
}

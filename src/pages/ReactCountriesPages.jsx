import { useState } from "react";

import TextInput from "../components/TextInput";

import { allCountries } from "../data/countries";
import Countries from "../components/Countries";

export default function ReactCountriesPages() {
  const [countryFilter, setCountryFilter] = useState('');
  const [visitedCountries, setVisitedCountries] = useState([]);

 const handleContryFilterChange = newCountryFilter => {
    setCountryFilter(newCountryFilter);
  }

  const toggleVisitedCountry = countryId => {
    let newVisitedCountries = [...visitedCountries];
    const isCountryVisited = newVisitedCountries.indexOf(countryId) === -1;
     
    if (isCountryVisited) {
     
      newVisitedCountries = newVisitedCountries.filter(
        visitedCountryId => visitedCountryId !== countryId
        );
      } else { 
        newVisitedCountries.push(countryId);
      
 }

    setVisitedCountries(newVisitedCountries);

  const filterLowerCase = countryFilter.trim().toLocaleLowerCase();

  const filteredCountries =
  filterLowerCase.length >= 3
  ? allCountries.filter(({ nameLowerCase }) =>
      nameLowerCase.includes(filterLowerCase)
    )
      : allCountries;

  return (
    <div>
       
        <TextInput
          id="inputCountryFilter"
          labelDescription="Informe o nome do país (pelo menos 3 caracteres)"
          inputValue={countryFilter}
          onInputChange={handleContryFilterChange}
          autoFocus
        />

      <Countries onCountryClick={toggleVisitedCountry}>
        {filteredCountries}
        </Countries>
     
    </div>
  );
}
}
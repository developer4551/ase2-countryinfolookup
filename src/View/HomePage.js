import '../App.css';
import '../css/HomePage.css';
import CountryDetailsComponent from '../component/CountryDetailsComponent.js';
import ErrorMessageComponent from '../component/ErrorMessageComponent.js';
import NoCountryFoundErrorMessageComponent from '../component/NoCountryFoundErrorMessageComponent.js';

import React, { useState } from 'react';


const searchDropdownOptions = {
  'Select search option': [
    'null',
    'Search by country name, country code, country capital.',
  ],
  Capital: ['capital', 'Enter country\'s capital.'],
  Code: ['alpha', 'Enter country code. '],
  Name: ['name', 'Enter country\'s full name.']
};

function HomePage() {
  const handleSearchOptionSelected = (event) => {
    setInputData({ ...inputData, [event.target.name]: event.target.value, });
    if (`${event.target.value}` in searchDropdownOptions) {
      setInputData({ ...inputData, [event.target.name]: `${searchDropdownOptions[event.target.value][0]}`, });
      console.log(searchDropdownOptions[event.target.value][0]);
      setDefaultText(searchDropdownOptions[event.target.value][1]);
      console.log(searchDropdownOptions[event.target.value][1]);
    }
  };

  const [inputData, setInputData] = useState({ inputText: '', searchOption: ''});
  const [defaultText, setDefaultText] = useState('Enter country name, capital or code.');
  const [listOfCountries, setlistOfCountries] = useState([]);
  const [error, setErrorMessage] = useState('');
  const [noCountryFounderror, setNoCountryFoundErrorMessage] = useState('');


  const handleSearchButtonClick = (event) => {
    if (event.keyCode === 13) {
      getDataFromExternalApi();
    }
  };

  function validateUserInput(searchOption, inputText){
    let regexForAllowingAlphabetsOnly = /^[a-zA-Z]+$/; 
    return  inputData.searchOption === 'Select search option' ||
    inputData.inputText.length === 0 || 
    inputData.searchOption === null  || 
    inputData.inputText === null ||
    inputData.searchOption === ''  || 
    inputData.inputText === '' ||
    !(regexForAllowingAlphabetsOnly.test(inputData.inputText));
  }

  const getDataFromExternalApi = async () => {
    try {
      if (validateUserInput(inputData.searchOption ,inputData.inputText.length
      )
      ) {
        console.log('input searchopt ', inputData.searchOption);
        console.log('**input text ', inputData.inputText);
        setErrorMessage(<ErrorMessageComponent />)
        setlistOfCountries('');
        setNoCountryFoundErrorMessage('');
      }
      else {
        const apiurl = `https://restcountries.com/v3.1/${inputData.searchOption}/${inputData.inputText}`;
        const response = await (await fetch(apiurl)).json();
        console.log(response);
        setlistOfCountries(response);

        if(response.message !== undefined){
          setlistOfCountries('');
          setErrorMessage('');
          setNoCountryFoundErrorMessage(<NoCountryFoundErrorMessageComponent />);
        }else{
          setErrorMessage('');
          setNoCountryFoundErrorMessage('');
        }
      }
    }
    catch (error) {
      setErrorMessage(<ErrorMessageComponent />)
    }
  };

  return (
    <div className='app-container'>
      <div className='search-container'>
        <div className='inputs-container'>

          <div className='form-align'>
            <label htmlFor='selectOpt' className='search-dropdown-label'> Choose search option</label>
            <select
              name='searchOption'
              id="selectOpt"
              className='search-dropdown'
              data-testid='select'
              onChange={handleSearchOptionSelected}
            >
              {Object.keys(searchDropdownOptions).map((item) => (
                <option
                  value={
                    item !== 'Please select a search option' ? item : 'null'
                  }
                  key={item}
                  data-testid="dropdown-options"
                  className='search-dropdown-option'
                >
                  {item}
                </option>
              ))}
            </select>
          </div>

          <div className='search-textbox-outer-container'>
            <div className='search-textbox-inner-container'>
              <label htmlFor='default-search' className='search-dropdown-label'>Please provide input </label>

              <input
                name='inputText'
                type='text'
                id='default-search'
                className='search-text-box'
                data-testid='searchTextBox'
                placeholder={defaultText}
                onChange={handleSearchOptionSelected}
                onKeyDown={handleSearchButtonClick}
                required
              />

              <button
                type='submit'
                className='search-text-box-button'
                data-testid='searchBtn'
                onClick={getDataFromExternalApi}
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>

      <p>{error}</p>
      <p>{noCountryFounderror}</p>

      <section className='country-details-section'>
        {
          (listOfCountries !== null && listOfCountries.length !== 0) ? <p className='search-dropdown-label'>Countries matching criteria - {listOfCountries.length} </p> : ''
        }

        {(listOfCountries !== null && listOfCountries.length !== 0)
          ? listOfCountries.map(
            (country) => (
              <CountryDetailsComponent
                officialName={country.name.official}
                capital={country.capital}
                currencyName={Object.values(country.currencies)[0].name}
                currencySymbol={Object.values(country.currencies)[0].symbol}
                demonyms={country.demonyms.eng.f}
                flag={country.flags.png}
                language={Object.values(country.languages)[0]}
                map={country.maps.googleMaps}
                population={Number(country.population).toLocaleString()}
                subRegion={country.subregion}
                timezones={country.timezones}
              />
            )
          )
          : ''}
      </section>
    </div>
  );
}

export default HomePage;
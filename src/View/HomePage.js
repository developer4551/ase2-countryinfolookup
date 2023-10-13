import '../App.css';
import '../css/HomePage.css';
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
    }
  };

  const [inputData, setInputData] = useState({ inputText: '', searchOption: '', });
  const [defaultText, setDefaultText] = useState('Enter country name, capital or code.');
  const [listOfCountries, setlistOfCountries] = useState([]);

  const handleSearchButtonClick = (event) => {
    if (event.keyCode === 13) {
      getDataFromExternalApi();
    }
  };

  const getDataFromExternalApi = async () => {
    try {
      if (
        inputData.searchOption === 'Select search option' ||
        inputData.inputText.length === 0
      ) {
        console.log('input searchopt ', inputData.searchOption);
        console.log('**input text ', inputData.inputText);
      }
      else {
        const apiurl = `https://restcountries.com/v3.1/${inputData.searchOption}/${inputData.inputText}`;
        const response = await (await fetch(apiurl)).json();
        setlistOfCountries(response);
      }
    }
    catch (error) {
    }
  };

  return (
    <div className='app-container'>
      <div className='search-container'>
        <div className='inputs-container'>

          <div className='form-align'>
            <label htmlFor='selectOpt' className='search-dropdown-label'>Choose search option</label>
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
                data-testid="searchBtn"
                onClick={getDataFromExternalApi}
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>


      {listOfCountries.length !== 0 && inputData.searchOption !== 'Select search option' &&
        inputData.inputText.length !== 0 ? 'Countries found' : 'Please provide correct input'

      }
      {

        listOfCountries.map(country => (
          <p>{country.name.official}<br />
            {country.subregion}</p>
        )
        )
      }

    </div>
  );
}

export default HomePage;
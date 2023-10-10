import '../App.css';
import '../css/HomePage.css';
import React, { useState } from 'react';


const searchDropdownOptions = {
    'Select search option': [
    'null',
    'Search by country name, country code, country capital.',
  ],
  Capital: ['capital', 'Enter country\'s capital.'], 
  Code: ['code', 'Enter country code. '],
  Name: ['name', 'Enter country\'s full name.']
};

function HomePage() {

  const handleSearchOptionSelected = (event) => {
    setInputData({...inputData,[event.target.name]: event.target.value,});

    if (`${event.target.value}` in searchDropdownOptions) {
      setInputData({ ...inputData, [event.target.name]: `${searchDropdownOptions[event.target.value][0]}`,});
      console.log(searchDropdownOptions[event.target.value][0]);
      setDefaultText(searchDropdownOptions[event.target.value][1]);
    }
  };

  const [inputData, setInputData] = useState({inputText: '', searchOption: '',});
  const [defaultText, setDefaultText] = useState('Enter country name, capital or code.');

  const handleSearchButtonClick = (event) => {
    if (event.keyCode === 13) {
      // Call external REST api here
      console.log("Search button clicked");
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
                type='text'
                id='default-search'
                className='search-text-box'
                name='inputText'
                data-testid='searchTextBox'
                placeholder={defaultText}
                onKeyDown={(e) => handleSearchButtonClick(e)}
                required
              />

              <button
                type='submit'
                className='search-text-box-button'
                data-testid="searchBtn"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
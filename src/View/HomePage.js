import React, { useState } from 'react';
import '../App.css';
import '../css/HomePage.css';


const searchDropdownOptions = {
  'Please select appropriate search option': [
    'null',
    'Search by country name, country code, country capital.',
  ],
  Capital: ['capital', 'Enter country\'s capital.'], 
  Code: ['alpha', 'Enter country code. '],
  Name: ['name', 'Enter country\'s full name.']
};

function HomePage() {

  return (
    <div className='app-container'>
      <div className='search-container'>
        <div className='inputs-container'>
          <div className='form-align'>
            <label for='selectOpt' className='search-dropdown-label'>Choose search option</label>
            <select
              name='searchOption'
              id="selectOpt"
              className='search-dropdown'
              data-testid='select'
            >
              {Object.keys(searchDropdownOptions).map((item) => (
                <option
                  value={
                    item !== 'Please select a search option' ? item : 'null'
                  }
                  key={item}
                  data-testid="dropdown-options"
                >
                  {item}
                </option>
              ))}
            </select>
          </div>
          <div className='search-textbox-outer-container'>
            <div className='search-textbox-inner-container'>
              <label for='default-search' className='search-dropdown-label'>Please provide input </label>

              <input
                type='text'
                id='default-search'
                className='search-text-box'
                required
                name='inputText'
                data-testid='searchTextBox'
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
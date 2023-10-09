import React, { useState } from 'react';
import '../App.css';
import '../css/HomePage.css';


const searchDropdownOptions = {
  'Please select appropriate search option': [
    'null',
    'Search by country name, country code, country capital.',
  ],
  Name: ['name', 'Enter country\'s full name.'],
  Code: ['alpha', 'Enter country code. '],
  Capital: ['capital', 'Enter country\'s capital.'],
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
            >
              {Object.keys(searchDropdownOptions).map((item) => (
                <option
                  value={
                    item !== 'Please select a search option' ? item : 'null'
                  }
                  key={item}
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
                type='search'
                id='default-search'
                className='search-text-box'
                required
                name='inputText'
              />
              <button
                type='submit'
                className='search-text-box-button'
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
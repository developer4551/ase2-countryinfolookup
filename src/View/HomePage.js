import React, { useState } from 'react';
import '../App.css';

const searchDropdownOptions = {
  'None selected': [
  'null',
  'Search by country name, country code, country capital.',
  ],
  Capital: ['capital', 'Enter country\'s capital.'],
  Code: ['alpha', 'Enter country code. '],
  Name: ['name', 'Enter country\'s full name.']
};

function HomePage() {
  return (
    <div>
      <div>
        <div>
          <div>
            <label>Choose search option </label>
            <select name='searchOption'>
              {Object.keys(searchDropdownOptions).map((item) => (
                <option value={
                  item !== 'None selected' ? item : 'null'
                }
                  key={item}
                >
                {item}
                </option>
              ))}
            </select>
          </div>
          <div>
            <div>
              <div>
              </div>
              <input type='search' name='inputText' required/>
              <button type='submit'>
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
import React from "react";
import '../css/ErrorMessageComponent.css';

function NoCountryFoundErrorMessageComponent() {
  return (
    <div className='error-message-container'>
      <p className='error-message-text'>No matching country / countries found with the provided input.</p>
    </div>
  );
}

export default NoCountryFoundErrorMessageComponent;
import React from "react";
import '../css/ErrorMessageComponent.css';

function ErrorMessageComponent() {
  return (
    <div className='error-message-container'>
      <p className='error-message-text'>Please check your input and try again.</p>
    </div>
  );
}

export default ErrorMessageComponent;
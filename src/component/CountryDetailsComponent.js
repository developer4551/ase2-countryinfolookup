import React from "react";
import '../css/CountryDetailsComponent.css';

function CountryDetailsComponent({
    officialName,
    capital,
    currencyName,
    currencySymbol,
    demonyms,
    flag,
    language,
    map,
    population,
    subRegion,
    timezones
}) {
    return (
        <div className='country-details-container'>
            <div className='country-name-flag-section'>
                <img className='country-flag-image' src={flag} alt="country flag" />
                <p className='country-official-name'>
                    {officialName}
                </p>
            </div>
            <div className='country-details-subsection'>
                <div className='country-details-column'>
                    <p>
                        <span className='country-details-font'>Capital: </span>
                        {capital}
                    </p>
                    <p>
                        <span className='country-details-font'>Currency: </span>
                        <span>{currencyName}</span> <span>({currencySymbol})</span>
                    </p>
                    <p>
                        <span className='country-details-font'>Demonyms:</span>{" "}
                        <span>{demonyms}</span>
                    </p>
                    <p>
                    <span className='country-details-font'>Google Map:</span>{" "}

                    <a className='country-maps-link' href={map} >
                        View Map
                    </a>
                    </p>
                </div>
                <div className='country-details-column'>
                    <p>
                        <span className='country-details-font'>Language: </span>
                        {language}
                    </p>
                    <p>
                        <span className='country-details-font'>Population: </span>
                        {population}
                    </p>
                    <p>
                        <span className='country-details-font'>Region: </span>
                        {subRegion}
                    </p>
                    <p>
                        <span className='country-details-font'>Time Zones: </span>
                        {Object.values(timezones).join(", ")}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default CountryDetailsComponent;
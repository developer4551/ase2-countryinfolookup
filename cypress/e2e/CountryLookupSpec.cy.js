describe('test user can access application', () => {
  it('user can access application website in browser', () => {
    cy.visit('http://localhost:3000/')
  })

  it('page heading visible', () => {
    cy.visit('http://localhost:3000/')
    cy.get('.App-header').should('contain', "Welcome to Country Information Lookup")
  })

  it('dropdown label visible', () => {
    cy.visit('http://localhost:3000/')
    cy.get('.search-dropdown-label').should('contain', "Choose search option")
  })

  it('dropdown with default option visible', () => {
    cy.visit('http://localhost:3000/')
    cy.get('#selectOpt').should('contain', "Select search option")
  })

  it('input textbox label visible', () => {
    cy.visit('http://localhost:3000/')
    cy.get('.search-dropdown-label').should('contain', "Please provide input")
  })

  it('input textbox visible', () => {
    cy.visit('http://localhost:3000/')
    cy.get('input[placeholder="Enter country name, capital or code."]').type("test input");
  })
})

describe('test search by country name functionality', () => {
  it('return country record for a given valid country name', () => {
    cy.visit('http://localhost:3000/')
    cy.get('#selectOpt').select("Name").invoke("val").should("eq", "Name")
    cy.get('#default-search').type("Estonia")
    cy.get('.search-text-box-button').click()
    cy.get('section').get('p').should("contain", "Countries matching criteria - 1")
    cy.get('.country-official-name').should("contain", "Republic of Estonia")
    cy.get('#capital > span').should("contain", "Capital:") 
    cy.get('#capital').should("contain", "Tallinn") 
    cy.get('#currency > span').should("contain", "Currency:") 
    cy.get('#currency').should("contain", "Euro (€)") 
    cy.get('#demonyms > span').should("contain", "Demonyms:") 
    cy.get('#demonyms').should("contain", "Estonian") 
    cy.get('#googlemap > span').should("contain", "Google Map:") 
    cy.get('#googlemap').should("contain", "View Map") 
    cy.get('#language > span').should("contain", "Language:") 
    cy.get('#language').should("contain", "Estonian") 
    cy.get('#population > span').should("contain", "Population:") 
    cy.get('#population').should("contain", "1,331,057") 
    cy.get('#region > span').should("contain", "Region:") 
    cy.get('#region').should("contain", "Northern Europe") 
    cy.get('#timezone > span').should("contain", "Time Zones:") 
    cy.get('#timezone').should("contain", "UTC+02:00") 
  })

  it('return multiple country records matching given partial country name', () => {
    cy.visit('http://localhost:3000/')
    cy.get('#selectOpt').select("Name").invoke("val").should("eq", "Name")
    cy.get('#default-search').type("nia")
    cy.get('.search-text-box-button').click()
    cy.get('section').get('p').should("contain", "Countries matching criteria - 11")
  })

  it('display google map link for a given valid country name', () => {
    cy.visit('http://localhost:3000/')
    cy.get('#selectOpt').select("Name").invoke("val").should("eq", "Name")
    cy.get('#default-search').type("Estonia")
    cy.get('.search-text-box-button').click()
    cy.get('#googlemap > span').should("contain", "Google Map:") 
    cy.get('#googlemap a').should('have.attr', 'href')  
  })
})

describe('test search by country capital functionality', () => {
  it('return country record for a given valid country name', () => {
    cy.visit('http://localhost:3000/')
    cy.get('#selectOpt').select("Capital").invoke("val").should("eq", "Capital")
    cy.get('#default-search').type("Tallinn")
    cy.get('.search-text-box-button').click()
    cy.get('section').get('p').should("contain", "Countries matching criteria - 1")
    cy.get('.country-official-name').should("contain", "Republic of Estonia")
    cy.get('#capital > span').should("contain", "Capital:") 
    cy.get('#capital').should("contain", "Tallinn") 
    cy.get('#currency > span').should("contain", "Currency:") 
    cy.get('#currency').should("contain", "Euro (€)") 
    cy.get('#demonyms > span').should("contain", "Demonyms:") 
    cy.get('#demonyms').should("contain", "Estonian") 
    cy.get('#googlemap > span').should("contain", "Google Map:") 
    cy.get('#googlemap').should("contain", "View Map") 
    cy.get('#language > span').should("contain", "Language:") 
    cy.get('#language').should("contain", "Estonian") 
    cy.get('#population > span').should("contain", "Population:") 
    cy.get('#population').should("contain", "1,331,057") 
    cy.get('#region > span').should("contain", "Region:") 
    cy.get('#region').should("contain", "Northern Europe") 
    cy.get('#timezone > span').should("contain", "Time Zones:") 
    cy.get('#timezone').should("contain", "UTC+02:00") 
  })

  it('return multiple country records matching given partial country capital', () => {
    cy.visit('http://localhost:3000/')
    cy.get('#selectOpt').select("Capital").invoke("val").should("eq", "Capital")
    cy.get('#default-search').type("th")
    cy.get('.search-text-box-button').click()
    cy.get('section').get('p').should("contain", "Countries matching criteria - 6")
  })
})

describe('test search by country code functionality', () => {
  it('return country record for a given valid country name', () => {
    cy.visit('http://localhost:3000/')
    cy.get('#selectOpt').select("Code").invoke("val").should("eq", "Code")
    cy.get('#default-search').type("est")
    cy.get('.search-text-box-button').click()
    cy.get('section').get('p').should("contain", "Countries matching criteria - 1")
    cy.get('.country-official-name').should("contain", "Republic of Estonia")
    cy.get('#capital > span').should("contain", "Capital:") 
    cy.get('#capital').should("contain", "Tallinn") 
    cy.get('#currency > span').should("contain", "Currency:") 
    cy.get('#currency').should("contain", "Euro (€)") 
    cy.get('#demonyms > span').should("contain", "Demonyms:") 
    cy.get('#demonyms').should("contain", "Estonian") 
    cy.get('#googlemap > span').should("contain", "Google Map:") 
    cy.get('#googlemap').should("contain", "View Map") 
    cy.get('#language > span').should("contain", "Language:") 
    cy.get('#language').should("contain", "Estonian") 
    cy.get('#population > span').should("contain", "Population:") 
    cy.get('#population').should("contain", "1,331,057") 
    cy.get('#region > span').should("contain", "Region:") 
    cy.get('#region').should("contain", "Northern Europe") 
    cy.get('#timezone > span').should("contain", "Time Zones:") 
    cy.get('#timezone').should("contain", "UTC+02:00") 
  })

  it('return multiple country records matching given partial country capital', () => {
    cy.visit('http://localhost:3000/')
    cy.get('#selectOpt').select("Code").invoke("val").should("eq", "Code")
    cy.get('#default-search').type("th")
    cy.get('.search-text-box-button').click()
    cy.get('section').get('p').should("contain", "Countries matching criteria - 1")
  })
})

describe('test error scenarios', () => {
  it('when no dropdown option selected', () => {
    cy.visit('http://localhost:3000/')
    cy.get('.search-text-box-button').click()
    cy.get('.error-message-text').should("contain", "Please check your input and try again.")
  })

  it('when no dropdown option selected and no input specified in textbox', () => {
    cy.visit('http://localhost:3000/')
    cy.get('.search-text-box-button').click()
    cy.get('.error-message-text').should("contain", "Please check your input and try again.")
  })

  it('when default dropdown option selected and valid input specified in textbox', () => {
    cy.visit('http://localhost:3000/')
    cy.get('#default-search').type("Estonia")
    cy.get('.search-text-box-button').click()
    cy.get('.error-message-text').should("contain", "Please check your input and try again.")
  })

  it('when dropdown option selected and numeric input specified in textbox', () => {
    cy.visit('http://localhost:3000/')
    cy.get('#selectOpt').select("Name").invoke("val").should("eq", "Name")
    cy.get('#default-search').type("9999999")
    cy.get('.search-text-box-button').click()
    cy.get('.error-message-text').should("contain", "Please check your input and try again.")
  })

  it('when dropdown option selected and blank spaces input specified in textbox', () => {
    cy.visit('http://localhost:3000/')
    cy.get('#selectOpt').select("Name").invoke("val").should("eq", "Name")
    cy.get('#default-search').type("     ")
    cy.get('.search-text-box-button').click()
    cy.get('.error-message-text').should("contain", "Please check your input and try again.")
  })

  it('when dropdown option capital is selected and valid input specified in textbox', () => {
    cy.visit('http://localhost:3000/')
    cy.get('#selectOpt').select("Capital").invoke("val").should("eq", "Capital")
    cy.get('#default-search').type("Xeno")
    cy.get('.search-text-box-button').click()
    cy.get('.error-message-text').should("contain", "No matching country / countries found with the provided input.")
  }) 

  it('when dropdown option code is selected and valid input specified in textbox', () => {
    cy.visit('http://localhost:3000/')
    cy.get('#selectOpt').select("Code").invoke("val").should("eq", "Code")
    cy.get('#default-search').type("Invalid")
    cy.get('.search-text-box-button').click()
    cy.get('.error-message-text').should("contain", "No matching country / countries found with the provided input.")
  }) 
})
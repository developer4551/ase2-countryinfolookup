# Advanced Software Engineering Summative 2 - Country Information Lookup App [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Project background
One of the UK Government department's software delivery team currently maintains a legacy ASP.Net MVC application.
The team wanted to move away from legacy technology to latest JavaScript frameworks.
A spike was undertaken to explore React. The following application was proposed and developed
as proof of concept to assess for its suitability for the business use case.

## Application
Country information lookup application provides user with a search functionality to look up country details
using a few options available as part of select dropdown (i.e. search by name, code or capital). It interfaces with a 
free [REST COUNTRIES APIs] (https://restcountries.com/) to query country information from. 

## Application design
Application design was developed using popular design prototyping tool [Figma] (https://www.figma.com/ui-design-tool/). 
Figma enables team collaboration during product designphase so that the entire team has visibility and can contribute 
towards enhancing the design in the best way possible for the end user. A couple of iterations and review by the team 
helped to finalise the application design [here](https://www.figma.com/file/89BETzEeS63MILHXE0Apfs/Demo-App?node-id=0%3A1&mode=dev)

## Technical stack
* [HMTL](https://devdocs.io/html/)
* [CSS](https://devdocs.io/css/)
* [React](https://devdocs.io/react/)
* [Jest](https://jestjs.io/docs/getting-started)
* [React Testing Library](https://testing-library.com/)
* [Netlify](https://www.netlify.com/)

## Project Management
Project delivery was managed using GitHub Projects due to easy of integrating with GitHub repository. A Kanban board was 
setup to identify issues that mapped to a set of milestones in the project lifecycle.Issues are marked with relevant labels
and milestones to enable clear tracking of the progress. Kanban board was the suitable board view as it is easy to visualise
Work in progress (Wip) limit and pull more issues in development.The project board consists of four columns - Todo (when new issue 
is created),In Progress (to indicate which features are being built), In Test(to identify features undergoing testing), 
Done (features that have passed quality analysis and signed off by the Product Owner)

User stories were written with below format taking into consideration the role and criteria to be met in order to complete it.
TBC User story format screenshot As a<> I want to <> so that <>

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
## Prerequisites to run the application locally 
```sh
node -v
```
```sh
npm -v
```
If they are not installed on your local machine, then refer to the setup instructions [here](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).

## 1. Clone the repository:

```sh
git clone https://github.com/developer4551/ase2-countryinfolookup.git
```

## 2. Run Scripts to launch application
```sh
npm start
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## 3. Run unit tests

```sh
npm test
```
```sh
a
```

More information on how to run tests can be found [here] (https://facebook.github.io/create-react-app/docs/running-tests).

## Continuous integration
As multiple developers collbaoratively work on a shared code base, it is important to check if the new commits maintain the integrity of code base by running 
continuous build and tests. This helps to avoid any breaking changes from being committed to main branch. Continuous integration captures any regression testing 
issues with each pull request prior to merging with main.
[GitHub Actions](https://github.com/features/actions) provide simple way of setting up software workflow such that it gets builds, tests and deploys. The virtual 
build servers can run and test your application on a different host operating system and runtimes. Different combination of runtimes can be configurable to test 
the application in. 


Continuous integration status: [![Node.js CI](https://github.com/developer4551/ase2-countryinfolookup/actions/workflows/node.js.yml/badge.svg)](https://github.com/developer4551/ase2-countryinfolookup/actions/workflows/node.js.yml)

## Continuous deployment

[![Netlify Status](https://api.netlify.com/api/v1/badges/2829bf8a-4a16-4a44-b4a9-beb6dd65277d/deploy-status)](https://app.netlify.com/sites/papaya-fenglisu-b89a86/deploys)

The application deploys to Netlify platform to ensure continuous deployment of tested and working software. Netlify was chosen as the deployment platform 
due to its ease of integrating with GitHub repos and reasonable learning curve to be able to deploy web applications with simple to use intuitive user interface.

## Application urls
[Live](https://main--papaya-fenglisu-b89a86.netlify.app/)

## Testing
The application testing was conducted by different testing types.

| Test Type		 | Tool used            | Documentation                         |
|----------------|---------------------|----------------------------------------|
|Unit            |Jest                 |![Unit tests](TBC screenshot)           |
|Integration     |React Testing Library|![React Testing library](TBC screenshot)|
|User acceptance |Exploratory          |                                        |

### Jest unit testing
Jest is a Javscript Testing Framework library that is easy to use with most of the popular JavaScript Frameworks like React. It requires zero configuration
effort and fast test performance due to parallel tests processing. Unit testing is the lowest level of testing which catches issues early on during development cycle.
Thus,unit tests are cheap to run and quick to catch any obvious code errors.

### React testing library integration testing

### User acceptance testing
Once the unit and integration tests are successfully executed, the application is then deployed to uat environment. This environment is replica of Live setup except 
with new features. Both internal and subset of users are then given an opportunity to interact with it, running random user journeys. As per the V-model for software 
development and testing, uat testing verifies requirements captured at the start. 

### Code coverage
To ensure thorough testing coverage, [Codecov](https://about.codecov.io/) has been configured to establish overall code coverage. This highlights to 
avoid any untested code to be deployed to Live environment.

[![codecov](https://codecov.io/gh/developer4551/ase2-countryinfolookup/branch/main/graph/badge.svg?token=FkUOknCveH)](https://app.codecov.io/gh/developer4551/ase2-countryinfolookup)

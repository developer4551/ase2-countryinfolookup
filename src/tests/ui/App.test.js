import { render, screen, fireEvent } from '@testing-library/react';
import App from '../../App';
import { BrowserRouter } from 'react-router-dom';

describe("checking_UI_Components", () => {
test('renders Welcome to Country Information Lookup text', () => {
  render(<BrowserRouter>
    <App />
  </BrowserRouter>);
  const linkElement = screen.getByText(/Welcome to Country Information Lookup/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders choose search option textbox label', () => {
  render(<BrowserRouter>
    <App />
  </BrowserRouter>);
  const linkElement = screen.getByText(/Choose search option/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders search options dropdown', () => {
  //Arrange
  const { getByTestId, getAllByTestId } = render(<BrowserRouter>
    <App />
  </BrowserRouter>);

  //Act
  fireEvent.change(getByTestId('select'), { target: { value: 'Capital' } });
  let searchOptions = getAllByTestId('dropdown-options');

  //Assert
  expect(searchOptions[0].innerHTML).toEqual('Select search option');
  expect(searchOptions[1].innerHTML).toEqual('Capital');
  expect(searchOptions[2].innerHTML).toEqual('Code');
  expect(searchOptions[3].innerHTML).toEqual('Name');

  expect(searchOptions[0].selected).toBeFalsy();
  expect(searchOptions[1].selected).toBeTruthy();
  expect(searchOptions[2].selected).toBeFalsy();
  expect(searchOptions[3].selected).toBeFalsy();
});

test('renders search textbox and search button', () => {
  render(<BrowserRouter>
    <App />
  </BrowserRouter>);
  const textBoxElement = screen.getByTestId(/searchTextBox/);
  const buttonElement = screen.getByTestId(/searchBtn/);
  expect(textBoxElement).toBeInTheDocument();
  expect(buttonElement).toBeInTheDocument();
});

test('search option selected correctly', () => {
  const { getByTestId, getAllByTestId } = render(<BrowserRouter>
    <App />
  </BrowserRouter>);

  fireEvent.change(getByTestId('select'), { target: { value: 'Name' } });
  let searchOptions = getAllByTestId('dropdown-options');

  expect(searchOptions[0].selected).toBeFalsy();
  expect(searchOptions[1].selected).toBeFalsy();
  expect(searchOptions[2].selected).toBeFalsy();
  expect(searchOptions[3].selected).toBeTruthy();
});

test('placeholder text displayed in search textbox', () => {
  const { getByTestId, getAllByTestId } = render(<BrowserRouter>
    <App />
  </BrowserRouter>);

  fireEvent.change(getByTestId('select'), { target: { value: 'Name' } });
  let placeholderElement = screen.queryByPlaceholderText(/Enter country\'s full name./i);
  expect(placeholderElement).toBeInTheDocument();
});
});


describe("test_SearchByName_ExternalApi", () => {
});
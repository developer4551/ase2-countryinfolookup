import { render, screen, fireEvent } from '@testing-library/react';
import App from '../../App';
import { BrowserRouter } from 'react-router-dom';

test('renders Welcome to Country Information Lookup text', () => {
  render(<BrowserRouter>
    <App />
  </BrowserRouter> );
  const linkElement = screen.getByText(/Welcome to Country Information Lookup/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders choose search option textbox label', () => {
  render(<BrowserRouter>
    <App />
  </BrowserRouter> );
  const linkElement = screen.getByText(/Choose search option/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders search options dropdown', () => {
  const {getByTestId, getAllByTestId } = render(<BrowserRouter>
    <App />
  </BrowserRouter> );
  fireEvent.change(getByTestId('select'), {target: {value : 'Capital'}});
  let searchOptions = getAllByTestId('dropdown-options');
  
  console.log(searchOptions[0].innerHTML);
  expect(searchOptions[0].innerHTML).toEqual('Please select appropriate search option');
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
  </BrowserRouter> );
  const textBoxElement = screen.getByTestId(/searchTextBox/);
  expect(textBoxElement).toBeInTheDocument();
  const buttonElement = screen.getByTestId(/searchBtn/);
  expect(buttonElement).toBeInTheDocument();

});
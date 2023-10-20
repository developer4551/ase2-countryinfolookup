import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from '../../App';
import { BrowserRouter } from 'react-router-dom';
import HomePage from '../../View/HomePage';

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

  test('user input in textbox is correctly set', () => {
    const { getByTestId, getAllByTestId } = render(<BrowserRouter>
      <App />
    </BrowserRouter>);

    fireEvent.change(getByTestId('select'), { target: { value: 'Name' } });
    let inputTextBoxText = screen.getByTestId(/searchTextBox/);
    fireEvent.change(inputTextBoxText, { target: { value: 'Estonia' } });
    expect(inputTextBoxText.value).toBe('Estonia');
  });
});

describe("test_validate_user_inputs", () => {
  test('user enters valid inputs', async () => {
    const { getByTestId, getAllByTestId } = render(<BrowserRouter>
      <App />
    </BrowserRouter>);

    let inputTextBoxText = screen.getByTestId(/searchTextBox/);
    let buttonElement = screen.getByTestId(/searchBtn/);

    fireEvent.change(getByTestId('select'), { target: { value: 'Capital' } });
    fireEvent.change(inputTextBoxText, { target: { value: 'London' } });
    fireEvent.click(buttonElement);

    expect(inputTextBoxText.value).toBe('London');
    expect(screen.findByTestId(/numberOfSearchResults/)).toBeTruthy();
  });

  test('user does not select valid dropdown value', async () => {
    const { getByTestId, getAllByTestId } = render(<BrowserRouter>
      <App />
    </BrowserRouter>);

    let inputTextBoxText = screen.getByTestId(/searchTextBox/);
    let buttonElement = screen.getByTestId(/searchBtn/);

    fireEvent.change(getByTestId('select'), { target: { value: 'Select search option' } });
    fireEvent.change(inputTextBoxText, { target: { value: 'London' } });
    fireEvent.click(buttonElement);

    expect(inputTextBoxText.value).toBe('London');
    expect(screen.queryByTestId(/numberOfSearchResults/)).not.toBeInTheDocument();
    expect(screen.findByTestId(/invalidInput/)).toBeTruthy();
  });

  test('user enters numeric value in text box', async () => {
    const { getByTestId, getAllByTestId } = render(<BrowserRouter>
      <App />
    </BrowserRouter>);

    let inputTextBoxText = screen.getByTestId(/searchTextBox/);
    let buttonElement = screen.getByTestId(/searchBtn/);

    fireEvent.change(getByTestId('select'), { target: { value: 'Name' } });
    fireEvent.change(inputTextBoxText, { target: { value: '123456' } });
    fireEvent.click(buttonElement);

    expect(inputTextBoxText.value).toBe('123456');
    expect(screen.queryByTestId(/numberOfSearchResults/)).not.toBeInTheDocument();
    expect(screen.findByTestId(/invalidInput/)).toBeTruthy();
  });

  test('user enters empty string in text box', async () => {
    const { getByTestId, getAllByTestId } = render(<BrowserRouter>
      <App />
    </BrowserRouter>);

    let inputTextBoxText = screen.getByTestId(/searchTextBox/);
    let buttonElement = screen.getByTestId(/searchBtn/);

    fireEvent.change(getByTestId('select'), { target: { value: 'Name' } });
    fireEvent.change(inputTextBoxText, { target: { value: '   ' } });
    fireEvent.click(buttonElement);

    expect(inputTextBoxText.value).toBe('   ');
    expect(screen.queryByTestId(/numberOfSearchResults/)).not.toBeInTheDocument();
    expect(screen.findByTestId(/invalidInput/)).toBeTruthy();
  });

  test('user enters special characters string in text box', async () => {
    const { getByTestId, getAllByTestId } = render(<BrowserRouter>
      <App />
    </BrowserRouter>);

    let inputTextBoxText = screen.getByTestId(/searchTextBox/);
    let buttonElement = screen.getByTestId(/searchBtn/);

    fireEvent.change(getByTestId('select'), { target: { value: 'Name' } });
    fireEvent.change(inputTextBoxText, { target: { value: 'Hello!!&&**' } });
    fireEvent.click(buttonElement);

    expect(inputTextBoxText.value).toBe('Hello!!&&**');
    expect(screen.queryByTestId(/numberOfSearchResults/)).not.toBeInTheDocument();
    expect(screen.findByTestId(/invalidInput/)).toBeTruthy();
  });

  test('user enters valid input but no record found', async () => {
    const { getByTestId, getAllByTestId } = render(<BrowserRouter>
      <App />
    </BrowserRouter>);

    let inputTextBoxText = screen.getByTestId(/searchTextBox/);
    let buttonElement = screen.getByTestId(/searchBtn/);

    fireEvent.change(getByTestId('select'), { target: { value: 'Name' } });
    fireEvent.change(inputTextBoxText, { target: { value: 'ValidNameNotMatchingAnyCountry' } });
    fireEvent.click(buttonElement);

    expect(inputTextBoxText.value).toBe('ValidNameNotMatchingAnyCountry');
    expect(screen.queryByTestId(/numberOfSearchResults/)).not.toBeInTheDocument();
    expect(screen.findByTestId(/noCountryFound/)).toBeTruthy();
  });
});
import { render, fireEvent, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Login from './../client/src/pages/Authentication/UserLogin';

// Command to run tests=> npm test
// Command to run only Login tests=> npm test -- --grep "Login page"
// Command to run only Signup tests =>npm test -- --grep "Signup page"




describe('Login page', () => {
  test('User can log in successfully', async () => {
    // Mock the fetch call to return a successful login response
    jest.spyOn(window, 'fetch').mockResolvedValueOnce({
      json: () => Promise.resolve({ message: 'User Login Successful' }),
    });

    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );

    // Fill in the login form with valid credentials
    const usernameInput = screen.getByTestId('login_user_username');
    const passwordInput = screen.getByTestId('login_user_password');
    const submitButton = screen.getByTestId('login_user_button');

    fireEvent.change(usernameInput, { target: { value: 'testuser' } });
    fireEvent.change(passwordInput, { target: { value: 'testpass' } });
    fireEvent.click(submitButton);

    // Assert that the login was successful
    expect(await screen.findByText('User Login Successful')).toBeInTheDocument();
  });

  test('User sees error message if username does not exist', async () => {
    // Mock the fetch call to return an error message for non-existent username
    jest.spyOn(window, 'fetch').mockResolvedValueOnce({
      json: () => Promise.resolve({ message: 'Username does not exists' }),
    });

    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );

    // Fill in the login form with invalid credentials
    const usernameInput = screen.getByTestId('login_user_username');
    const passwordInput = screen.getByTestId('login_user_password');
    const submitButton = screen.getByTestId('login_user_button');

    fireEvent.change(usernameInput, { target: { value: 'invaliduser' } });
    fireEvent.change(passwordInput, { target: { value: 'testpass' } });
    fireEvent.click(submitButton);

    // Assert that the error message is displayed
    expect(await screen.findByText('Username does not exists')).toBeInTheDocument();
  });

  test('User sees error message if password is incorrect', async () => {
    // Mock the fetch call to return an error message for incorrect password
    jest.spyOn(window, 'fetch').mockResolvedValueOnce({
      json: () => Promise.resolve({ message: 'Password is incorrect' }),
    });

    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );

    // Fill in the login form with invalid credentials
    const usernameInput = screen.getByTestId('login_user_username');
    const passwordInput = screen.getByTestId('login_user_password');
    const submitButton = screen.getByTestId('login_user_button');

    fireEvent.change(usernameInput, { target: { value: 'testuser' } });
    fireEvent.change(passwordInput, { target: { value: 'invalidpass' } });
    fireEvent.click(submitButton);

    // Assert that the error message is displayed
    expect(await screen.findByText('Password is incorrect')).toBeInTheDocument();
  });
});


describe('Signup page', () => {
    test('User can sign up successfully', async () => {
      // Mock the fetch call to return a successful signup response
      jest.spyOn(window, 'fetch').mockResolvedValueOnce({
        json: () => Promise.resolve({ message: 'User has been saved to the database.' }),
      });
  
      render(
        <MemoryRouter>
          <Login />
        </MemoryRouter>
      );
  
      // Fill in the signup form with valid credentials
      const nameInput = screen.getByTestId('signup_name');
      const usernameInput = screen.getByTestId('signup_username');
      const emailInput = screen.getByTestId('signup_email');
      const passwordInput = screen.getByTestId('signup_password');
      const confirmPasswordInput = screen.getByTestId('signup_confpassword');
      const submitButton = screen.getByTestId('signup_button');
  
      fireEvent.change(nameInput, { target: { value: 'Test User' } });
      fireEvent.change(usernameInput, { target: { value: 'testuser' } });
      fireEvent.change(emailInput, { target: { value: 'testuser@example.com' } });
      fireEvent.change(passwordInput, { target: { value: 'testpass' } });
      fireEvent.change(confirmPasswordInput, { target: { value: 'testpass' } });
      fireEvent.click(submitButton);
  
      // Assert that the signup was successful
      expect(await screen.findByText('User has been saved to the database.')).toBeInTheDocument();
    });
  
    test('User sees error message if username already exists', async () => {
      // Mock the fetch call to return an error message for existing username
      jest.spyOn(window, 'fetch').mockResolvedValueOnce({
        json: () => Promise.resolve({ message: 'Username already exists.' }),
      });
  
      render(
        <MemoryRouter>
          <Login />
        </MemoryRouter>
      );
  
      // Fill in the signup form with invalid credentials
      const nameInput = screen.getByTestId('signup_name');
      const usernameInput = screen.getByTestId('signup_username');
      const emailInput = screen.getByTestId('signup_email');
      const passwordInput = screen.getByTestId('signup_password');
      const confirmPasswordInput = screen.getByTestId('signup_confpassword');
      const submitButton = screen.getByTestId('signup_button');
  
      fireEvent.change(nameInput, { target: { value: 'Test User' } });
      fireEvent.change(usernameInput, { target: { value: 'existinguser' } });
      fireEvent.change(emailInput, { target: { value: 'testuser@example.com' } });
      fireEvent.change(passwordInput, { target: { value: 'testpass' } });
      fireEvent.change(confirmPasswordInput, { target: { value: 'testpass' } });
      fireEvent.click(submitButton);
  
      // Assert that the error message is displayed
      expect(await screen.findByText('Username already exists.')).toBeInTheDocument();
    });
});
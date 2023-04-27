test('User can log in successfully', async () => {
    // Mock the fetch call to return a successful login response
    global.fetch = jest.fn().mockResolvedValueOnce({
        json: () => Promise.resolve({ message: 'User Login Successful' }),
      });
    // jest.spyOn(window, 'fetch').mockResolvedValueOnce({
    //   json: () => Promise.resolve({ message: 'User Login Successful' }),
    // });

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
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Investment } from '../client/src/Services/APIs/UserAPI';
import InvestmentForm from '../client/src/pages/User/Investment.js';

jest.mock('../client/src/Services/APIs/UserAPI', () => ({
  Investment: jest.fn(),
}));

describe('InvestmentForm', () => {
  it('submits form data', async () => {
    // Arrange
    const investmentData = {
      userID: '1234',
      phoneNo: '1234567890',
      fundType: 'Equity',
      investmentAmount: '50000',
      duration: '3',
    };

    Investment.mockResolvedValue({
      status: 200,
      body: { success: true },
    });

    render(<InvestmentForm />);

    const userIDInput = screen.getByLabelText(/user id/i);
    const phoneNoInput = screen.getByLabelText(/phone number/i);
    const fundTypeInput = screen.getByLabelText(/fund type/i);
    const investmentAmountInput = screen.getByLabelText(/investment amount/i);
    const durationInput = screen.getByLabelText(/duration/i);
    const submitButton = screen.getByRole('button', { name: /submit/i });

    // Act
    fireEvent.change(userIDInput, { target: { value: investmentData.userID } });
    fireEvent.change(phoneNoInput, { target: { value: investmentData.phoneNo } });
    fireEvent.change(fundTypeInput, { target: { value: investmentData.fundType } });
    fireEvent.change(investmentAmountInput, { target: { value: investmentData.investmentAmount } });
    fireEvent.change(durationInput, { target: { value: investmentData.duration } });
    fireEvent.click(submitButton);

    // Assert
    await waitFor(() => {
      expect(Investment).toHaveBeenCalledWith(investmentData);
      expect(screen.getByText(/form submitted successfully/i)).toBeInTheDocument();
    });
  });

  it('shows error message for invalid phone number', async () => {
    // Arrange
    const investmentData = {
      userID: '1234',
      phoneNo: '123456',
      fundType: 'Equity',
      investmentAmount: '50000',
      duration: '3',
    };

    Investment.mockResolvedValue({
      status: 201,
      body: { success: false },
    });

    render(<InvestmentForm />);

    const userIDInput = screen.getByLabelText(/user id/i);
    const phoneNoInput = screen.getByLabelText(/phone number/i);
    const fundTypeInput = screen.getByLabelText(/fund type/i);
    const investmentAmountInput = screen.getByLabelText(/investment amount/i);
    const durationInput = screen.getByLabelText(/duration/i);
    const submitButton = screen.getByRole('button', { name: /submit/i });

    // Act
    fireEvent.change(userIDInput, { target: { value: investmentData.userID } });
    fireEvent.change(phoneNoInput, { target: { value: investmentData.phoneNo } });
    fireEvent.change(fundTypeInput, { target: { value: investmentData.fundType } });
    fireEvent.change(investmentAmountInput, { target: { value: investmentData.investmentAmount } });
    fireEvent.change(durationInput, { target: { value: investmentData.duration } });
    fireEvent.click(submitButton);

    // Assert
    await waitFor(() => {
      expect(Investment).toHaveBeenCalledWith(investmentData);
      expect(screen.getByText(/invalid phone number/i)).toBeInTheDocument();
    });
  });

  it('shows error message for internal server error', async () => {
    // Arrange
    const investmentData = {
      userID: '1234',
      phoneNo: '9876543210',
fundType: 'Equity',
investmentAmount: '10000',
duration: '3'
};

const mockInvestment = jest.fn().mockImplementation(() => Promise.resolve({status: 200}));

// Act
const { getByLabelText, getByText } = render(<InvestmentForm Investment={mockInvestment} />);

fireEvent.change(getByLabelText('User ID'), {target: {value: investmentData.userID}});
fireEvent.change(getByLabelText('Phone Number'), {target: {value: investmentData.phoneNo}});
fireEvent.change(getByLabelText('Fund Type'), {target: {value: investmentData.fundType}});
fireEvent.change(getByLabelText('Investment Amount'), {target: {value: investmentData.investmentAmount}});
fireEvent.change(getByLabelText('Duration (in years)'), {target: {value: investmentData.duration}});

fireEvent.submit(getByText('Submit'));

// Assert
expect(mockInvestment).toHaveBeenCalledWith(investmentData);
await waitFor(() => expect(getByText('Form Submitted Successfully')).toBeInTheDocument());    
});

it('should show error message when invalid phone number is entered', async () => {
// Arrange
const investmentData = {
userID: '1234',
phoneNo: '12345',
fundType: 'Equity',
investmentAmount: '10000',
duration: '3'
};

const mockInvestment = jest.fn().mockImplementation(() => Promise.resolve({status: 201}));

// Act
const { getByLabelText, getByText } = render(<InvestmentForm Investment={mockInvestment} />);

fireEvent.change(getByLabelText('User ID'), {target: {value: investmentData.userID}});
fireEvent.change(getByLabelText('Phone Number'), {target: {value: investmentData.phoneNo}});
fireEvent.change(getByLabelText('Fund Type'), {target: {value: investmentData.fundType}});
fireEvent.change(getByLabelText('Investment Amount'), {target: {value: investmentData.investmentAmount}});
fireEvent.change(getByLabelText('Duration (in years)'), {target: {value: investmentData.duration}});

fireEvent.submit(getByText('Submit'));

// Assert
expect(mockInvestment).toHaveBeenCalledWith(investmentData);
await waitFor(() => expect(getByText('Invalid Phone Number!')).toBeInTheDocument());    
});

it('should show error message when server returns status code 400', async () => {
// Arrange
const investmentData = {
userID: '1234',
phoneNo: '9876543210',
fundType: 'Equity',
investmentAmount: '10000',
duration: '3'
};
const mockInvestment = jest.fn().mockImplementation(() => Promise.resolve({status: 400}));

// Act
const { getByLabelText, getByText } = render(<InvestmentForm Investment={mockInvestment} />);

fireEvent.change(getByLabelText('User ID'), {target: {value: investmentData.userID}});
fireEvent.change(getByLabelText('Phone Number'), {target: {value: investmentData.phoneNo}});
fireEvent.change(getByLabelText('Fund Type'), {target: {value: investmentData.fundType}});
fireEvent.change(getByLabelText('Investment Amount'), {target: {value: investmentData.investmentAmount}});
fireEvent.change(getByLabelText('Duration (in years)'), {target: {value: investmentData.duration}});

fireEvent.submit(getByText('Submit'));

// Assert
expect(mockInvestment).toHaveBeenCalledWith(investmentData);
await waitFor(() => expect(getByText('Internal Server Error!')).toBeInTheDocument());    
});
});
     

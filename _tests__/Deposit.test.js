/*import React, { useState } from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import axios from "axios";
import Deposit from '../client/src/pages/Admin/Deposit.js';

// mock axios to return a balance of 500 for any GET request to /api/balance
jest.mock("axios");
axios.get.mockImplementation((url) => {
  if (url === "/api/balance/123") {
    return Promise.resolve({ data: { balance: 500 } });
  }
  return Promise.reject(new Error("Invalid URL"));
});

// mock axios to return a status of 201 for any POST request to /api/deposit
axios.post.mockImplementation((url, data) => {
  if (url === "/api/deposit" && data.id === "123" && data.amount === 100) {
    return Promise.resolve({ status: 200, data: {} });
  }
  return Promise.resolve({ status: 201, data: {} });
});

describe("Deposit", () => {
  test("displays balance after checking balance", async () => {
    const { getByText, getByLabelText } = render(<Deposit />);
    const idInput = getByLabelText("Deposit ID");
    const checkBalanceButton = getByText("Check Balance");

    fireEvent.change(idInput, { target: { value: "123" } });
    fireEvent.click(checkBalanceButton);

    await waitFor(() => {
      expect(getByText("Current balance is: 500")).toBeInTheDocument();
    });
  });

  test("displays error when checking balance fails", async () => {
    axios.get.mockImplementation(() => Promise.reject(new Error("Network Error")));
    const { getByText, getByLabelText } = render(<Deposit />);
    const idInput = getByLabelText("Deposit ID");
    const checkBalanceButton = getByText("Check Balance");

    fireEvent.change(idInput, { target: { value: "123" } });
    fireEvent.click(checkBalanceButton);

    await waitFor(() => {
      expect(getByText("Error while checking balance")).toBeInTheDocument();
    });
  });

  test("displays error when deposit fails", async () => {
    const { getByText, getByLabelText } = render(<Deposit />);
    const idInput = getByLabelText("Deposit ID");
    const amountInput = getByLabelText("Amount");
    const checkBalanceButton = getByText("Check Balance");
    const depositButton = getByText("Deposit");

    fireEvent.change(idInput, { target: { value: "123" } });
    fireEvent.click(checkBalanceButton);

    fireEvent.change(amountInput, { target: { value: 0 } });
    fireEvent.click(depositButton);

    await waitFor(() => {
      expect(getByText("Enter a positive amount to be deposited")).toBeInTheDocument();
    });

    fireEvent.change(amountInput, { target: { value: 100 } });
    fireEvent.click(depositButton);

    await waitFor(() => {
      expect(getByText("Error while depositing the amount")).toBeInTheDocument();
    });
  });

test("displays success message when deposit succeeds", async () => {
    const { getByText, getByLabelText } = render(<Deposit />);
    const idInput = getByLabelText("Deposit ID");
    const amountInput = getByLabelText("Amount");
    const checkBalanceButton = getByText("Check Balance");
    const depositButton = getByText("Deposit");

    fireEvent.change(idInput, { target: { value: "123" } });
    fireEvent.click(checkBalanceButton);

    fireEvent.change(amountInput, { target: { value: 0 } });
    fireEvent.click(depositButton);

    await waitFor(() => {
      expect(getByText("Enter a positive amount to be deposited")).toBeInTheDocument();
    });

    fireEvent.change(amountInput, { target: { value: 100 } });
    fireEvent.click(depositButton);

    await waitFor(() => {
      expect(getByText("Error while depositing the amount")).toBeInTheDocument();
    });
  })


  test("displays success message when deposit succeeds", async () => {
    const { getByText, getByLabelText } = render(<Deposit />);
    const idInput = getByLabelText("Deposit ID");
    const amountInput = getByLabelText("Amount");
    const checkBalanceButton = getByText("Check Balance");
    const depositButton = getByText("Deposit");
  
    fireEvent.change(idInput, { target: { value: "123" } });
    fireEvent.click(checkBalanceButton);
  
    fireEvent.change(amountInput, { target: { value: 100 } });
    fireEvent.click(depositButton);
  
    await waitFor(() => {
      expect(getByText("Amount deposited successfully")).toBeInTheDocument();
    });
  });
});  */

/*import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Deposit from '../client/src/pages/Admin/Deposit.js';

test('it allows the user to deposit money', async () => {
  // Mock the DepositCall function
  const mockDepositCall = jest.fn().mockResolvedValue({ status: 200 });
  jest.mock('../../Services/APIs/AdminAPI', () => ({
    DepositCall: mockDepositCall,
  }));

  // Render the component
  render(<Deposit />);

  // Enter the user ID
  const idInput = screen.getByLabelText(/deposit id/i);
  fireEvent.change(idInput, { target: { value: '123' } });

  // Check the balance
  const checkBalanceButton = screen.getByText(/check balance/i);
  fireEvent.click(checkBalanceButton);

  // Wait for the balance to be displayed
  await screen.findByText(/current balance is:/i);

  // Enter the deposit amount
  const amountInput = screen.getByLabelText(/amount/i);
  fireEvent.change(amountInput, { target: { value: '500' } });

  // Submit the form
  const depositButton = screen.getByText(/deposit/i);
  fireEvent.click(depositButton);

  // Wait for the success message to be displayed
  await screen.findByText(/amount deposited successfully/i);

  // Check that the DepositCall function was called with the correct arguments
  expect(mockDepositCall).toHaveBeenCalledWith({
    id: '123',
    amount: '500',
  });
});
*/

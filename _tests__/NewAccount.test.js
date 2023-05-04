import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import { RequestNewAccount } from "../../Services/APIs/UserAPI";
import Page4 from '../client/src/pages/User/NewAccount.js';  

// Command to run tests=> npm test -- --testPathPattern='NewAccount.test.js'

jest.mock("../client/src/Services/APIs/UserAPI.js");

describe("Page4", () => {
  it("should display an error message if the phone number is invalid", async () => {
    const response = { status: 201 };
    RequestNewAccount.mockResolvedValueOnce(response);
    render(
      <MemoryRouter>
        <Page4 />
      </MemoryRouter>
    );
    userEvent.type(screen.getByLabelText("Phone Number"), "12345");
    fireEvent.submit(screen.getByRole("button"));
    await waitFor(() => expect(screen.getByText("Invalid Phone Number!")).toBeInTheDocument());
  });

  it("should display an error message if the date of birth is invalid", async () => {
    const response = { status: 202 };
    RequestNewAccount.mockResolvedValueOnce(response);
    render(
      <MemoryRouter>
        <Page4 />
      </MemoryRouter>
    );
    userEvent.type(screen.getByLabelText("Date of Birth"), "2022-05-01");
    fireEvent.submit(screen.getByRole("button"));
    await waitFor(() => expect(screen.getByText("Invalid Date of Birth!")).toBeInTheDocument());
  });

  it("should display an error message if the PIN code is invalid", async () => {
    const response = { status: 203 };
    RequestNewAccount.mockResolvedValueOnce(response);
    render(
      <MemoryRouter>
        <Page4 />
      </MemoryRouter>
    );
    userEvent.type(screen.getByLabelText("PIN Code"), "123");
    fireEvent.submit(screen.getByRole("button"));
    await waitFor(() => expect(screen.getByText("Invalid PIN Code!")).toBeInTheDocument());
  });

  it("should display an error message if the email ID does not have a web account", async () => {
    const response = { status: 204 };
    RequestNewAccount.mockResolvedValueOnce(response);
    render(
      <MemoryRouter>
        <Page4 />
      </MemoryRouter>
    );
    userEvent.type(screen.getByLabelText("Email"), "test@example.com");
    fireEvent.submit(screen.getByRole("button"));
    await waitFor(() =>
      expect(
        screen.getByText(
          "Web Account is needed for the Entered Email ID to request for a New Bank Account!"
        )
      ).toBeInTheDocument()
    );
  });

  it("should display a success message if the account request is successful", async () => {
    const response = { status: 200 };
    RequestNewAccount.mockResolvedValueOnce(response);
    render(
      <MemoryRouter>
        <Page4 />
      </MemoryRouter>
    );
    userEvent.type(screen.getByLabelText("Phone Number"), "1234567890");
    userEvent.type(screen.getByLabelText("Date of Birth"), "1990-01-01");
    userEvent.type(screen.getByLabelText("Email"), "test@example.com");
    fireEvent.submit(screen.getByRole("button"));
    await waitFor(() =>
      expect(screen.getByText("New Account Requested Has Been Submitted")).toBeInTheDocument()
    );
  });
});

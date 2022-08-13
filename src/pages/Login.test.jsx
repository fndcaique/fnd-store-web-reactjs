import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithRouterAndStore } from '../tests/helpers/renderWithRouterAndStore';
import Login from './Login';

describe('Login tests', () => {
  const USER_LOGIN = 'login';
  const USER_PASSSWORD = 'password';

  it('should have a functionaly inputs for login and password', async () => {
    // userEvent.setup({})
    renderWithRouterAndStore(<Login />);
    const loginInput = await screen.findByRole('textbox', { name: /login/i });
    expect(loginInput).toBeInTheDocument();
    const passwordInput = await screen.findByLabelText(/password/i);
    expect(passwordInput).toBeInTheDocument();
    const buttonSubmit = await screen.findByRole('button', { name: /submit/i });
    expect(buttonSubmit).toBeInTheDocument();
    await userEvent.type(loginInput, USER_LOGIN);
    expect(loginInput.value).toBe(USER_LOGIN);
    await userEvent.type(passwordInput, USER_PASSSWORD);
    expect(passwordInput.value).toBe(USER_PASSSWORD);
  });

  // it('should log in with a username and password valid', () => {});
});

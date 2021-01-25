import React, { FormEvent, useCallback, useState } from 'react';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';

import Input from '../../components/Input';
import { useAuth } from '../../hooks/AuthHook';
import useForm from '../../hooks/useForm';

import { Container, Link, LoginBox } from './styles';
import getValidationErrors from '../../utils/getValidationErrors';
import { useToast } from '../../hooks/ToastHook';

interface LoginFormProps {
  email: string;
  password: string;
}

interface Errors {
  [key: string]: string;
}

const Login: React.FC = () => {
  const [form, handleChange, reset] = useForm<LoginFormProps>({
    email: '',
    password: '',
  });

  const { addToast } = useToast();

  const [errors, setErrors] = useState<Errors>({} as Errors);

  const history = useHistory();

  const { signIn } = useAuth();

  const onSubmit = useCallback(
    async (event: FormEvent<HTMLFormElement>): Promise<void> => {
      try {
        event.preventDefault();

        const schema = Yup.object().shape({
          email: Yup.string()
            .required('E-mail is required!')
            .email('This is not a valid e-mail.'),
          password: Yup.string().required('Password is required!'),
        });

        await schema.validate(form, { abortEarly: false });
        const isValid = signIn(form);
        if (isValid) {
          reset({ email: '', password: '' });
          history.push('/');
        } else {
          addToast({
            type: 'error',
            description: `Please, you've inserted the wrong credentials. Try again.`,
            title: 'Wrong credentials.',
          });
        }
      } catch (e) {
        if (e instanceof Yup.ValidationError) {
          const errs = getValidationErrors(e);

          setErrors({ ...errs });
        }
      }
    },
    [addToast, form, history, reset, signIn],
  );

  return (
    <Container>
      <LoginBox>
        <form onSubmit={onSubmit}>
          <h1>Login</h1>
          <Input
            type="email"
            name="email"
            error={errors.email}
            defaultValue={form.email}
            onChange={e => handleChange(e)}
            placeholder="Enter your e-mail."
          />
          <Input
            type="password"
            name="password"
            error={errors.password}
            defaultValue={form.password}
            onChange={e => handleChange(e)}
            placeholder="Enter password."
          />
          <Link type="secondary" href="/">
            Forgot your password?
          </Link>
          <button type="submit">Log In</button>
          <Link type="primary" href="/">
            Create a new account.
          </Link>
        </form>
      </LoginBox>

      <section>
        <h2>Made with ReactJS + Typescript</h2>
        <p>
          This layout and all was made by Gabriel Leon using ReactJS +
          ContextAPI + Typescript + Styled Components. The right credentials are
          admin@admin.com & password
        </p>
      </section>
    </Container>
  );
};

export default Login;

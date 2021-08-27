import React, { ChangeEvent, FormEvent, useState } from 'react';
import useAuthContext from '../../../../contexts/auth';
import { Password } from '../../../../components/Field/Password';
import setErrorState from '../../../../components/Field/setErrorState';
import UserRepository from '../../../../repositories/UserRepository';
import ResetPassword from './view';

const ResetPasswordContainer = (): JSX.Element => {
  const { user } = useAuthContext();
  const [values, setValues] = useState({
    password: '',
    password2: '',
  });

  async function handlePasswordReset(event: FormEvent): Promise<void> {
    event.preventDefault();
    const [passwordElement, password2Element] = document.querySelectorAll(
      'input',
    ) as NodeListOf<HTMLInputElement>;
    const password: Password = new Password(values.password);
    const condition =
      password.isValid() && values.password === values.password2;

    if (condition) {
      try {
        const userRespository: UserRepository = new UserRepository(user?.id);
        await userRespository.resetPassword();

        setValues(() => ({ ...values, password: '', password2: '' }));

        setTimeout(() => {
          window.location.pathname = '/perfil';
          passwordElement.value = values.password;
        }, 300);
      } catch (error) {
        console.error(error);
      }
    } else {
      setErrorState(
        passwordElement,
        'Senha inválida. As senhas devem seguir o padrão e serem idênticas.',
      );
      setErrorState(
        password2Element,
        'Siga o padrão e digite a mesma senha digitada acima.',
      );
    }
  }

  function handleValue(event: ChangeEvent<HTMLInputElement>): void {
    const { value } = event.currentTarget;
    setValues(() => ({ ...values, password: value }));
  }

  function handleValue2(event: ChangeEvent<HTMLInputElement>): void {
    const { value } = event.currentTarget;
    setValues(() => ({ ...values, password2: value }));
  }

  return (
    <ResetPassword
      values={values}
      handleValue={handleValue}
      handleValue2={handleValue2}
      handlePasswordReset={handlePasswordReset}
    />
  );
};

export default ResetPasswordContainer;

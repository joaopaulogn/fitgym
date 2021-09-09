import React, { ChangeEvent, FormEvent, useState } from 'react';
import useAuthContext from '../../../../contexts/auth';
import Password from '../../../../helpers/Password';
import UserRepository from '../../../../repositories/UserRepository';
import ResetPassword from './view';
import Field from '../../../../helpers/Field';

const ResetPasswordContainer = (): JSX.Element => {
  const { user } = useAuthContext();
  const [values, setValues] = useState({
    password: '',
    password2: '',
  });

  async function handlePasswordReset(event: FormEvent): Promise<void> {
    const passwordElement = document.getElementById(
      'password',
    ) as HTMLInputElement;
    const password: Password = new Password(values.password);
    const condition =
      password.isValid() && values.password === values.password2;

    event.preventDefault();

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
      const password: Field = new Field(passwordElement);
      const password2: Field = new Field(
        document.getElementById('password2') as HTMLInputElement,
      );

      password.setErrorState();
      password2.setErrorState();
    }
  }

  function handleValue(event: ChangeEvent<HTMLInputElement>): void {
    const { name, value } = event.currentTarget;

    setValues(() => ({ ...values, [name]: value }));
  }

  return (
    <ResetPassword
      values={values}
      handleValue={handleValue}
      handleValue2={handleValue}
      handlePasswordReset={handlePasswordReset}
    />
  );
};

export default ResetPasswordContainer;

import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import useAuthContext from '../../contexts/auth';
import api from '../../services/api';
import setErrorState from '../../components/Field/setErrorState';
import Profile from './view';
import {
  Password,
  updatePassword,
} from '../../components/Field/Password/index';

const ProfileContainer = () => {
  const { user } = useAuthContext();
  const history = useHistory();
  const [passwordView, setPasswordView] = useState('');
  const [values, setValues] = useState({
    name: user?.getName(),
    cnpj: user?.getCNPJ(),
    password: '',
    password2: '',
  });
  const id = user?.getID();

  useEffect(() => {
    (async function fetchUserPassword(): Promise<void> {
      const response = await api.get(`/profile/${id}`);
      const { data } = response;

      setPasswordView(data.password);
    })();
  });

  async function handlePasswordReset(event: FormEvent) {
    event.preventDefault();
    const [passwordElement, password2Element] = document.querySelectorAll(
      'input',
    ) as NodeListOf<HTMLInputElement>;
    const password: Password = new Password(passwordElement.value);
    const condition =
      password.isValid() && values.password === values.password2;

    if (condition) {
      try {
        updatePassword(passwordElement.value, id);
        setTimeout(() => {
          history.push('/perfil');
        }, 200);

        setValues(() => ({ ...values, password: '', password2: '' }));
        setPasswordView(passwordElement.value);
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

  function handlePasswordValue(event: ChangeEvent<HTMLInputElement>): void {
    const { value } = event.currentTarget;
    setValues(() => ({ ...values, password: value }));
  }

  function handlePassword2Value(event: ChangeEvent<HTMLInputElement>): void {
    const { value } = event.currentTarget;
    setValues(() => ({ ...values, password2: value }));
  }

  return (
    <Profile
      values={values}
      handlePasswordValue={handlePasswordValue}
      handlePassword2Value={handlePassword2Value}
      handlePasswordReset={handlePasswordReset}
      passwordView={passwordView}
    />
  );
};

export default ProfileContainer;

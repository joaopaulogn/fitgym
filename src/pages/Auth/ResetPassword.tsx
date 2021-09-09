import React, { ChangeEvent, FormEvent, useState } from 'react';
// import { useHistory } from 'react-router-dom';
// import useAuthContext from '../../contexts/auth';
import AuthScreen from '../../components/PageScreen/Auth';
import PasswordContainer from '../../components/Field/Password/index';

const ResetPassword = (): JSX.Element => {
  // const history = useHistory();
  // const { user } = useAuthContext();
  const [values, setValues] = useState({ password: '', password2: '' });

  function handleResetPassword(event: FormEvent): void {
    // const cnpj = user?.cnpj;
    // const password = (document.getElementById('password') as HTMLInputElement)
    //   .value;

    event.preventDefault();
  }

  function handleValue(event: ChangeEvent<HTMLInputElement>): void {
    const { name, value } = event.currentTarget;

    setValues(() => ({ ...values, [name]: value }));
  }

  return (
    <AuthScreen
      heading="Redefinir senha"
      subheading="Digite abaixo sua nova senha"
      fields={
        <>
          <PasswordContainer
            value={values.password}
            handleValue={handleValue}
          />
          <PasswordContainer
            name="confirmPassword"
            title="Confirme sua senha"
            placeholder="Confirmar senha"
            value={values.password2}
            handleValue={handleValue}
            instructionMessage="As senhas devem seguir o padrão citado acima e serem iguais"
          />
        </>
      }
      buttonText="Redefinir"
      onSubmit={(event) => handleResetPassword(event)}
    />
  );
};

export default ResetPassword;

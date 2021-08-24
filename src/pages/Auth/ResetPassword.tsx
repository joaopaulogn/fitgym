import React, { FormEvent } from 'react';
// import { useHistory } from 'react-router-dom';
import useAuthContext from '../../contexts/auth';
import AuthScreen from '../../components/PageScreen/Auth';
import PasswordContainer, {
  updatePassword,
} from '../../components/Field/Password/index';

const ResetPassword = () => {
  // const history = useHistory();
  const { user } = useAuthContext();
  const [values, setValues] = React.useState({
    password: '',
    password2: '',
  });

  function handleResetPassword(event: FormEvent) {
    const id = user?.getID();
    const password = (document.getElementById('password') as HTMLInputElement)
      .value;

    event.preventDefault();

    updatePassword(password, id);
  }

  function handlePasswordValue(event: React.ChangeEvent<HTMLInputElement>) {
    const { value } = event.currentTarget;
    setValues(() => ({ ...values, password: value }));
  }

  function handlePassword2Value(event: React.ChangeEvent<HTMLInputElement>) {
    const { value } = event.currentTarget;
    setValues(() => ({ ...values, password2: value }));
  }

  return (
    <AuthScreen
      heading="Redefinir senha"
      subheading="Digite abaixo sua nova senha"
      fields={
        <>
          <PasswordContainer
            value={values.password}
            handleValue={handlePasswordValue}
          />
          <PasswordContainer
            name="confirmPassword"
            title="Confirme sua senha"
            placeholder="Confirmar senha"
            value={values.password2}
            handleValue={handlePassword2Value}
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

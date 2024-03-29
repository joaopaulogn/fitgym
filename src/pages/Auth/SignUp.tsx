import React, { ChangeEvent, useState } from 'react';
import AuthScreen from '../../components/PageScreen/Auth';
import Checkbox from '../../components/Checkbox';
import PasswordContainer from '../../components/Field/Password';

// export function updatePageTitle() {
//   const { pathname } = window.location;
//   const { title } = document;
//   const formattedPathname =
//     pathname.charAt(1).toUpperCase() + pathname.slice(2, pathname.length);
//   let newTitle = `${title} - ${formattedPathname}`;

//   if (pathname === '/') newTitle = title;

//   document.title = newTitle;
// }

const SignUp = (): JSX.Element => {
  const [values, setValues] = useState({ password: '', password2: '' });

  // function handleRegister(event: React.FormEvent) {
  //   event.preventDefault();
  //   const [$password, $password2] = document.querySelectorAll(
  //     'input[type="password"]',
  //   ) as NodeListOf<HTMLInputElement>;

  //   if (isValidPassword() && $password.value === $password2.value)
  //     console.log(true);

  //   api.post('register/post', {
  //     password: $password.value,
  //   });
  // }

  function handleValue(event: ChangeEvent<HTMLInputElement>): void {
    const { name, value } = event.currentTarget;

    setValues(() => ({ ...values, [name]: value }));
  }

  return (
    <AuthScreen
      heading="Primeiro acesso?"
      subheading="Cadastre sua senha abaixo"
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
          <Checkbox text="Criando uma conta, você concorda com os Termos de Serviço e Condições, e Privacidade e Política." />
        </>
      }
      buttonText="Cadastrar"
      // onSubmit={(e) => handleRegister(e)}
    />
  );
};

export default SignUp;

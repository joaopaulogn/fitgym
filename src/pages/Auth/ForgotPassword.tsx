import React from 'react';
import AuthScreen from '../../components/PageScreen/Auth';
import InfoText from '../../components/InfoText';
import Link from '../../components/Link';
import CNPJContainer from '../../components/Field/CNPJ/index';

const ForgotPassword = () => {
  const [cnpj, setCnpj] = React.useState('');

  // export async function handleForgotPassword(event: React.FormEvent) {
  //   event.preventDefault();
  //   const $input = document.getElementById('cnpj') as HTMLInputElement;
  //   const valueOfInput = $input.value;
  //   const valueOfDB = await getCNPJFromDB();

  //   if (valueOfInput === valueOfDB) {
  //     localStorage.setItem('id', valueOfInput);
  //     window.location.pathname = '/redefinir-senha';
  //   } else {
  //     setErrorState($input, 'CNPJ não cadastrado. Por favor, tente novamente.');
  //   }
  // }

  function handleCnpjValue(event: React.ChangeEvent<HTMLInputElement>) {
    setCnpj(event.currentTarget.value);
  }

  return (
    <AuthScreen
      heading="Esqueceu sua senha?"
      subheading="Digite seu CNPJ cadastrado"
      fields={<CNPJContainer value={cnpj} handleValue={handleCnpjValue} />}
      buttonText="Redefinir senha"
      // onSubmit={(event) => handleForgotPassword(event)};
      bottomContent={
        <>
          <InfoText
            text="Se o CNPJ digitado for o mesmo do cadastro, você será redirecionado
          para redefinir sua senha."
          />
          <Link path="/" text="Voltar" icon="chevron_left" />
        </>
      }
    />
  );
};

export default ForgotPassword;

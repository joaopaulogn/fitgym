import React from 'react';
import Section from '.';
import Company from '../Field/Auth/Company';
import Email from '../Field/Auth/Email';

const Edit = () => (
  <Section
    content="Atualize o nome de sua empresa e seu e-mail de acesso."
    button={{ text: 'Salvar', width: '34rem', disabled: true }}
  >
    <form action="." method="POST" noValidate>
      <Company />
      <Email
        title="Digite seu e-mail"
        errorMessage="E-mail inválido. Por favor, tente novamente."
      />
    </form>
  </Section>
);

export default Edit;

import React from 'react';
import Section from '.';
import Company from '../Field/Company';
import Email from '../Field/Email';

const Edit = () => (
  <Section
    content="Atualize o nome de sua empresa e seu e-mail de acesso."
    button={{ text: 'Salvar', width: '34rem' }}
  >
    <form action="." method="POST" noValidate>
      <Company />
      <Email
        title="Digite seu e-mail"
        errorMessage="E-mail não cadastrado. Por favor, tente novamente."
      />
    </form>
  </Section>
);

export default Edit;

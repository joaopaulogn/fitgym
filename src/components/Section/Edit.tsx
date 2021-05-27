import React from 'react';
import Section from '.';
import Company from '../Field/Auth/Company';
import Email from '../Field/Auth/Email';
import Form from '../Form';

const Edit = () => (
  <Section
    content={
      <>
        <span>Atualize o nome de sua empresa e seu e-mail</span>
        <span>de acesso</span>
      </>
    }
  >
    <Form buttonText="Salvar">
      <>
        <Company />
        <Email
          title="Digite seu e-mail"
          errorMessage="E-mail inválido. Por favor, tente novamente."
        />
      </>
    </Form>
  </Section>
);

export default Edit;

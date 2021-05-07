import React from 'react';
import Field from '.';
import Icon from '../Icon';
import ErrorAlert from '../ErrorAlert';

const CompanyInput = () => (
  <Field
    type="text"
    name="company"
    id="company"
    minLength={1}
    title="Digite o nome da academia"
    placeholder="Nome da academia"
  >
    <>
      <Icon icon="business" />
      <ErrorAlert text="Por favor, preencha com o nome de sua academia." />
    </>
  </Field>
);

export default CompanyInput;

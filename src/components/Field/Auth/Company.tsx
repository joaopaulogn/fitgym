import React from 'react';
import AuthField from '.';
import ErrorAlert from '../../ErrorAlert';

const CompanyInput = () => (
  <AuthField
    type="text"
    name="company"
    id="company"
    minLength={1}
    title="Digite o nome da academia"
    placeholder="Nome da academia"
    icon="business"
  >
    <ErrorAlert text="Por favor, preencha com o nome de sua academia." />
  </AuthField>
);

export default CompanyInput;

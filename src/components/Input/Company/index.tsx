import React from 'react';
import Input from '..';
import ErrorAlert from '../../Error';

const CompanyInput = () => (
  <div className="form__field">
    <Input
      type="text"
      name="company"
      id="company"
      placeholder="Nome da academia"
      minLength={1}
      title="Digite o nome da academia"
      icon="business"
    />
    <ErrorAlert text="Por favor, preencha com o nome de sua academia." />
  </div>
);

export default CompanyInput;

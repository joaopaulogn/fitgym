import React from 'react';
import api from '../../../services/api';
import AuthField from '.';
import Icon from '../../Icon';
import setErrorState from './setErrorState';

const CNPJ = () => {
  function maskCNPJ(event: React.KeyboardEvent) {
    const $this = event.currentTarget as HTMLInputElement;

    if (event.key !== 'Backspace' && event.key !== 'Delete') {
      if ($this.value.length === 2 || $this.value.length === 6) {
        $this.value += '.';
      } else if ($this.value.length === 10) {
        $this.value += '/';
      } else if ($this.value.length === 15) {
        $this.value += '-';
      }
    }
  }

  function setValidityState({ currentTarget }: React.FormEvent) {
    const $this = currentTarget as HTMLInputElement;
    const valueTrimmed = $this.value
      .replace('.', '')
      .replace('.', '')
      .replace('/', '')
      .replace('-', '');

    if (valueTrimmed.length === 14) {
      $this.classList.add('valid');
    } else {
      setErrorState($this, 'CNPJ não cadastrado. Por favor, digite novamente.');
    }
  }

  return (
    <AuthField
      type="text"
      name="cnpj"
      title="Digite o número do seu CNPJ"
      placeholder="CNPJ"
      maxLength={18}
      onKeyDown={(event) => maskCNPJ(event)}
      onBlur={(event) => setValidityState(event)}
      instructions="Digite somente números, por favor."
    >
      <Icon icon="assignment_ind" filled />
    </AuthField>
  );
};

export default CNPJ;

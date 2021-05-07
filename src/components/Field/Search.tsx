import React from 'react';
import Field from '.';
import Icon from '../Icon';

const SearchBar = () => (
  <Field
    type="search"
    name="searchBar"
    id="searchBar"
    title="Digite aqui o nome de um aluno"
    placeholder="Pesquisar"
  >
    <Icon icon="search" />
  </Field>
);

export default SearchBar;

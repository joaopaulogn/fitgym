import React from 'react';
import Field from '.';

const SearchBar = () => (
  <Field
    type="search"
    name="searchBar"
    id="searchBar"
    title="Digite aqui o nome de um aluno"
    placeholder="Pesquisar"
    icon="search"
  />
);

export default SearchBar;

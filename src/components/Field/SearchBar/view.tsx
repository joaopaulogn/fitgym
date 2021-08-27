import React, { ChangeEvent, KeyboardEvent, InputHTMLAttributes } from 'react';
import Field from '..';
import Icon from '../../Icon';

interface DefaultProps extends InputHTMLAttributes<HTMLInputElement> {
  value: string;
  handleValue(event: ChangeEvent<HTMLInputElement>): void;
}

interface SearchBarProps extends DefaultProps {
  handleStudentsSearch(event: KeyboardEvent<HTMLInputElement>): void;
}

const SearchBar = ({
  value,
  handleValue,
  handleStudentsSearch,
}: SearchBarProps): JSX.Element => (
  <Field
    type="search"
    name="searchBar"
    value={value}
    title="Digite o nome de um aluno"
    placeholder="Pesquisar"
    onKeyUp={handleStudentsSearch}
    onChange={handleValue}
  >
    <Icon icon="search" />
  </Field>
);

export default SearchBar;

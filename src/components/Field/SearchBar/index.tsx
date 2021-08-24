import React from 'react';
import { DefaultProps } from '../Password/view';
import SearchBar from './view';

const SearchBarContainer = ({ value, handleValue }: DefaultProps) => {
  function searchForStudents(
    event: React.KeyboardEvent<HTMLInputElement>,
  ): void {
    const thisElement = event.currentTarget;
    const container = document.querySelector(
      '.students__container',
    ) as HTMLUListElement;
    const students = container.querySelectorAll(
      'li',
    ) as NodeListOf<HTMLLIElement>;

    students.forEach((student) => student.classList.add('disable'));
    students.forEach((student) => {
      const name = student.firstElementChild?.children[1] as HTMLSpanElement;
      const nameValue = name.innerText.toLowerCase();
      const inputValue = thisElement.value.toLowerCase();

      if (nameValue.startsWith(inputValue)) {
        student.classList.remove('disable');
      } else if (thisElement.value === '') {
        student.classList.remove('disable');
      }
    });
  }

  return (
    <SearchBar
      value={value}
      handleValue={handleValue}
      handleStudentsSearch={searchForStudents}
    />
  );
};

export default SearchBarContainer;

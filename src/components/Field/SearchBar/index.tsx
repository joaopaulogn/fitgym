import React, { KeyboardEvent } from 'react';
import { DefaultProps } from '../Password/view';
import SearchBar from './view';

const SearchBarContainer = ({
  value,
  handleValue,
}: DefaultProps): JSX.Element => {
  function searchForStudents(event: KeyboardEvent<HTMLInputElement>): void {
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
      const studentName = name.innerText.toLowerCase();
      const inputValue = thisElement.value.toLowerCase();

      if (studentName.startsWith(inputValue) || thisElement.value === '') {
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

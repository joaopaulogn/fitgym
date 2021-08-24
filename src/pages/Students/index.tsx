import React, { FormEvent, useEffect, useState } from 'react';
import Students from './view';
import useAuthContext from '../../contexts/auth';
import Student from '../../entities/Student';
import api from '../../services/api';

const StudentsContainer = () => {
  const { user } = useAuthContext();
  const [students, setStudents] = useState<Array<Student> | null>(
    [] as Array<Student>,
  );
  const token = localStorage.getItem('token');
  const [searchBarValue, setSearchBarValue] = useState('');

  useEffect((): void => {
    async function fetchData(): Promise<void> {
      const response = await api.get(`/students/${user?.getID()}`, {
        headers: { 'x-access-token': token },
      });
      const data = response.data as Array<Student>;

      setStudents(data);
    }
    fetchData();
  }, [token, user]);

  function handleSearchValue(event: FormEvent<HTMLInputElement>) {
    setSearchBarValue(event.currentTarget.value);
  }

  return (
    <Students
      studentsData={students}
      handleSearchBarValue={handleSearchValue}
      searchBarValue={searchBarValue}
    />
  );
};

export default StudentsContainer;

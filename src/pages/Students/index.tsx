import React, { FormEvent, ReactNode, useEffect, useState } from 'react';
import useAuthContext from '../../contexts/auth';
import Student from '../../entities/Student';
import StudentData from '../../components/StudentData';
import Students from './view';
import StudentRepository from '../../repositories/StudentRepository';

const StudentsContainer = (): JSX.Element => {
  const { user } = useAuthContext();
  const token = localStorage.getItem('token');
  const [searchBarValue, setSearchBarValue] = useState('');
  const [students, setStudents] = useState<Array<Student> | null>(
    [] as Array<Student>,
  );

  useEffect((): void => {
    (async function fetchData(): Promise<void> {
      const student: StudentRepository = new StudentRepository(user?.id);
      const data = await student.getAllData();

      setStudents(data);
    })();
  }, [token, user]);

  function returnStudentData(): ReactNode {
    return students?.map(({ id, name, email, phone, trainingAmount }) => (
      <StudentData
        key={id}
        id={id}
        name={name}
        email={email}
        phone={phone}
        trainingAmount={trainingAmount}
      />
    ));
  }

  function handleSearchBarValue(event: FormEvent<HTMLInputElement>): void {
    setSearchBarValue(event.currentTarget.value);
  }

  return (
    <Students
      studentsData={returnStudentData()}
      handleSearchBarValue={handleSearchBarValue}
      searchBarValue={searchBarValue}
    />
  );
};

export default StudentsContainer;

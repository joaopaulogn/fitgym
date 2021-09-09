import User from '../backend/entities/User';
import Student from '../entities/Student';

interface ILocalStorage {
  storageUser: string | null;
  storageToken: string | null;
}

class LocalStorage {
  public saveUserData(user: User, token: string): void {
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('token', token);
  }

  public getUserData(): ILocalStorage {
    const storageUser = localStorage.getItem('user');
    const storageToken = localStorage.getItem('token');

    return { storageUser, storageToken };
  }

  public saveStudentData(student: Student): void {
    localStorage.setItem('student', JSON.stringify(student));
  }

  public getStudentData(): Student {
    const storageStudent = localStorage.getItem('student') as string;

    return JSON.parse(storageStudent);
  }
}

export default LocalStorage;

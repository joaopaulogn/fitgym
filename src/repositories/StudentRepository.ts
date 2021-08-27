import Student from '../entities/Student';
import api from '../services/api';

class StudentRepository {
  public constructor(private idUser?: number) {
    this.idUser = idUser;
  }

  public async getAllData(): Promise<Array<Student>> {
    const response = await api.get(`/students/${this.idUser}`);

    return response.data;
  }
}

export default StudentRepository;

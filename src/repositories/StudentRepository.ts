import Student from '../entities/Student';
import api from '../services/api';

class StudentRepository {
  public constructor(private userID?: number) {
    this.userID = userID;
  }

  protected getUserID(): number | undefined {
    return this.userID;
  }

  public async getAllData(): Promise<Array<Student>> {
    const userID = this.getUserID();
    const response = await api.get(`/students/${userID}`);

    return response.data;
  }
}

export default StudentRepository;

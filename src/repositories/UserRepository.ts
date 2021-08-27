import api from '../services/api';

class UserRepository {
  public constructor(private id: number | undefined) {
    this.id = id;
  }

  protected getID(): number | undefined {
    return this.id;
  }

  public async getPassword(): Promise<string> {
    const id = this.getID();
    const response = await api.get(`/profile/${id}`);

    return response.data.password;
  }

  public async resetPassword(): Promise<void> {
    const id = this.getID();
    const password = (document.getElementById('password') as HTMLInputElement)
      .value;

    await api.patch(`/reset-password/${id}`, { password });
  }
}

export default UserRepository;

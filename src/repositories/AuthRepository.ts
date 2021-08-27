import { CNPJ } from '../components/Field/CNPJ';
import UserReponse from '../entities/UserResponse';
import api from '../services/api';
import LocalStorageRepository from './LocalStorageRepository';

class AuthRepository {
  public async signIn(): Promise<UserReponse> {
    const localStorage: LocalStorageRepository = new LocalStorageRepository();
    const cnpj: string = new CNPJ(
      (document.getElementById('cnpj') as HTMLInputElement).value,
    ).valueCleaner();
    const password = (document.getElementById('password') as HTMLInputElement)
      .value;
    const response = await api.post('/login', { cnpj, password });
    const { token, user } = response.data;

    api.defaults.headers['x-access-token'] = token;
    localStorage.saveUserData(user, token);

    return user;
  }

  public async signOut(): Promise<void> {
    api.post('/logout');
    localStorage.clear();
    window.location.pathname = '/';
  }
}

export default AuthRepository;

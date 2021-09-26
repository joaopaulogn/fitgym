import UserReponse from '../helpers/UserResponse';
import api from '../services/api';
import { clearCNPJValue } from '../utils/format';
import LocalStorageRepository from './LocalStorageRepository';

class AuthRepository {
  public async signIn(): Promise<UserReponse> {
    const localStorageRepository: LocalStorageRepository =
      new LocalStorageRepository();
    const password = (document.getElementById('password') as HTMLInputElement)
      .value;
    const cnpj = clearCNPJValue();
    const response = await api.post('/login', { cnpj, password });
    const { token, user } = response.data;

    api.defaults.headers['x-access-token'] = token;
    localStorageRepository.saveUserData(user, token);

    return user;
  }

  public async signOut(): Promise<void> {
    api.post('/logout');
    localStorage.clear();
    window.location.pathname = '/';
  }
}

export default AuthRepository;

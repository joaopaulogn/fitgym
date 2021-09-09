import CNPJ from '../helpers/CNPJ';
import UserReponse from '../helpers/UserResponse';
import api from '../services/api';
import LocalStorage from '../helpers/LocalStorage';

class AuthRepository {
  public async signIn(): Promise<UserReponse> {
    const localStorage: LocalStorage = new LocalStorage();
    const cnpjValue = (document.getElementById('cnpj') as HTMLInputElement)
      .value;
    const passwordValue = (document.getElementById(
      'password',
    ) as HTMLInputElement).value;
    const cleanValue: string = new CNPJ(cnpjValue).clearValue();
    const response = await api.post('/login', { cleanValue, passwordValue });
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

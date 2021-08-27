import User from '../backend/entities/User';

interface LocalStorage {
  storageUser: string | null;
  storageToken: string | null;
}

class LocalStorageRepository {
  public saveUserData(user: User, token: string): void {
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('token', token);
  }

  public getUserData(): LocalStorage {
    const storageUser = localStorage.getItem('user');
    const storageToken = localStorage.getItem('token');

    return { storageUser, storageToken };
  }
}

export default LocalStorageRepository;

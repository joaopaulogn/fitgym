import User from '../entities/User';

export default class UserReponse {
  public constructor(
    private isAuthenticated: boolean,
    private token: string,
    private user: User,
  ) {
    this.isAuthenticated = isAuthenticated;
    this.token = token;
    this.user = user;
  }

  public getAuth(): boolean {
    return this.isAuthenticated;
  }

  public getToken(): string {
    return this.token;
  }

  public getUser(): User {
    return this.user;
  }
}

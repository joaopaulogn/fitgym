import { CNPJ } from '../components/Field/CNPJ/index';
import { UserResponse } from '../entities/User';
import api from './api';

export default async function fetchUserData(): Promise<UserResponse> {
  const cnpjField = document.getElementById('cnpj') as HTMLInputElement;
  const passwordField = document.getElementById('password') as HTMLInputElement;
  const value = new CNPJ(cnpjField.value).valueCleaner();

  const response = await api.post('/login', {
    cnpj: value,
    password: passwordField.value,
  });

  return response.data;
}

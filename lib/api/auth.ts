import axios from 'axios';

interface SingUpAPIBody {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  birthday: string;
}

export const signupAPI = (body: SingUpAPIBody) =>
  axios.post('/api/auth/signup', body);

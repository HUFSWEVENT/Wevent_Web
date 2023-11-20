import axios from 'axios';

export const authAPI = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_ENV_HOST}`,
  withCredentials: true,
});

export const postSignUpApi = async (reqBody: object) => {
  const data = await authAPI
    .post(`/signup`, reqBody)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error.response.data;
    });
  return data;
};

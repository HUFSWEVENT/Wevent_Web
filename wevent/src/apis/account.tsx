import axios from 'axios';

export const authAPI = axios.create({
  baseURL: `https://wevent-api-nvcxh.run.goorm.site`,
  withCredentials: true,
});

export const postSignUpApi = async (reqBody: object) => {
  const data = await authAPI
    .post(`/api/accounts/register/`, reqBody)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error.response;
    });
  return data;
};

export const postValidateCodeApi = async (reqBody: object) => {
  const data = await authAPI
    .post(`/api/accounts/auth/email/`, reqBody)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error.response;
    });
  return data;
};

export const patchValidateEmailApi = async (reqBody: object) => {
  const data = await authAPI
    .patch(`/api/accounts/auth/email/`, reqBody)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error.response;
    });
  return data;
};

export const postLoginApi = async (reqBody: object) => {
  const data = await authAPI
    .post(`/login`, reqBody)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error.response.data;
    });
  return data;
};

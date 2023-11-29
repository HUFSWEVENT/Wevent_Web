import { authAPI } from './account';

export const createPlaceApi = async (reqBody: object) => {
  const config = {
    headers: {
      // Authorization: token,
      'Content-Type': 'multipart/form-data',
    },
  };
  const data = await authAPI
    .post(`/api/events/register/`, reqBody, config)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error.response;
    });
  return data;
};

import Http from '../utils/HttpUtils';

const END_POINT = 'http://192.168.1.156:5000';

export const getListCategories = (offset, limit) => {
  return Http.get(`${END_POINT}/categories`, {
    params: {
      offset,
      limit,
    },
  });
};

export const getListItems = (offset, limit, id) => {
  return Http.get(`${END_POINT}/categories/${id}/items`, {
    params: {
      offset,
      limit,
    },
  });
};

export const getItemDetail = (categoryId, itemId) => {
  return Http.get(`${END_POINT}/categories/${categoryId}/items/${itemId}`);
};

// export const updateItem = () => {}

export const createNewItem = (data) => {
  const { description, photoUrl, id } = data;
  return Http.post(`${END_POINT}/categories/${id}/items`, {
    description,
    image_url: photoUrl,
  });
};

export const createNewCategory = (data) => {
  return Http.post(`${END_POINT}/categories`, data);
};

export const login = (data) => {
  return Http.post(`${END_POINT}/auth`, data);
};

export const signup = (data) => {
  return Http.post(`${END_POINT}/users`, data);
};

export const getUserInformation = () => {
  return Http.get(`${END_POINT}/users/me`);
};

import Http from '../utils/HttpUtils';

export const getListCategories = (offset, limit) => {
  return Http.get('/categories', {
    params: {
      offset,
      limit,
    },
  });
};

export const getListItems = (offset, limit, id) => {
  return Http.get(`/categories/${id}/items`, {
    params: {
      offset,
      limit,
    },
  });
};

export const getItemDetail = (categoryId, itemId) => {
  return Http.get(`/categories/${categoryId}/items/${itemId}`);
};

export const updateItemDetail = (categoryId, itemId, data) => {
  return Http.put(`/categories/${categoryId}/items/${itemId}`, data);
};

export const deleteItemDetail = (categoryId, itemId) => {
  return Http.delete(`/categories/${categoryId}/items/${itemId}`);
};

export const createNewItem = (data) => {
  const { description, photoUrl, id } = data;
  return Http.post(`/categories/${id}/items`, {
    description,
    image_url: photoUrl,
  });
};

export const createNewCategory = (data) => {
  return Http.post('/categories', data);
};

export const login = (data) => {
  return Http.post('/auth', data);
};

export const signup = (data) => {
  return Http.post('/users', data);
};

export const getUserInformation = () => {
  return Http.get('/users/me');
};

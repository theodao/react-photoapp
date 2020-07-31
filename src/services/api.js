import Http from '../utils/HttpUtils';

const END_POINT = 'http://192.168.1.156:5000';

export const getListCategories = (page, limit) => {
  return Http.get('https://picsum.photos/v2/list', {
    params: {
      page,
      limit,
    },
  });
};

// export const getListItems = () => {}

// export const getItemDetail = () => {}

// export const getCategoryDetail = () => {}

// export const updateItem = () => {}

export const createNewCategory = (data) => {
  return Http.post(`${END_POINT}/categories`, data);
};

export const createNewItem = (data, categoryId) => {
  return Http.post(`${END_POINT}/categories/${categoryId}/items`, data);
};

export const login = (data) => {
  return Http.post(`${END_POINT}/login`, data);
};

// export const logout = () => {}

export const signup = (data) => {
  return Http.post(`${END_POINT}/registrations`, data);
};

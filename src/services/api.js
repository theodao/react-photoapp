import Http from '../utils/HttpUtils';

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

// export const login = () => {}

// export const logout = () => {}

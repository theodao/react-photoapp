import {
  getListCategories,
  getListItems,
  getItemDetail,
  updateItemDetail,
  deleteItemDetail,
  createNewCategory,
  createNewItem,
  login,
  signup,
  getUserInformation,
} from '../api';
import Http from '../../utils/HttpUtils';

jest.mock('axios', () => {
  return {
    create: () => {
      return {
        interceptors: {
          request: { use: jest.fn(), eject: jest.fn() },
          response: { use: jest.fn(), eject: jest.fn() },
        },
        defaults: {
          params: {},
          headers: {},
        },
        post: jest.fn(),
        get: jest.fn(),
        put: jest.fn(),
        delete: jest.fn(),
      };
    },
  };
});

describe('Testing serivce module', () => {
  it('testing create new category api', () => {
    createNewCategory();
    expect(Http.post).toHaveBeenCalled();
  });

  it('testing get list category api', () => {
    getListCategories();
    expect(Http.get).toHaveBeenCalled();
  });

  it('tesing create new item api', () => {
    createNewItem({});
    expect(Http.post).toHaveBeenCalled();
  });

  it('testing login api', () => {
    login();
    expect(Http.post).toHaveBeenCalled();
  });

  it('testing sign up api', () => {
    signup();
    expect(Http.post).toHaveBeenCalled();
  });

  it('teting get user information api', () => {
    getUserInformation();
    expect(Http.get).toHaveBeenCalled();
  });

  it('testing get list item api', () => {
    getListItems();
    expect(Http.get).toHaveBeenCalled();
  });

  it('testing get item detail', () => {
    getItemDetail();
    expect(Http.get).toHaveBeenCalled();
  });

  it('tesing update item', () => {
    updateItemDetail();
    expect(Http.put).toHaveBeenCalled();
  });

  it('testing delete item', () => {
    deleteItemDetail();
    expect(Http.delete).toHaveBeenCalled();
  });
});

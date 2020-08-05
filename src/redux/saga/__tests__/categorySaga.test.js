import { runSaga } from 'redux-saga';
import {
  fetchCategories,
  fetchItem,
  fetchItems,
  addItem,
  deleteItem,
  updateItem,
  addCategory,
} from '../categorySaga';

describe('Testing category saga', () => {
  it('Should fetchCategories', async () => {
    const dispatch = jest.fn();

    await runSaga(
      {
        dispatch,
      },
      fetchCategories,
      { payload: {} },
    );
  });

  it('Should fetchItems', async () => {
    const dispatch = jest.fn();

    await runSaga(
      {
        dispatch,
      },
      fetchItems,
      { payload: {} },
    );
  });

  it('Should fetchItem', async () => {
    const dispatch = jest.fn();

    await runSaga(
      {
        dispatch,
      },
      fetchItem,
      { payload: {} },
    );
  });

  it('Should addItem', async () => {
    const dispatch = jest.fn();

    await runSaga(
      {
        dispatch,
      },
      addItem,
      { payload: {} },
    );
  });

  it('Should deleteItem', async () => {
    const dispatch = jest.fn();

    await runSaga(
      {
        dispatch,
      },
      deleteItem,
      { payload: {} },
    );
  });

  it('Should updateItem', async () => {
    const dispatch = jest.fn();

    await runSaga(
      {
        dispatch,
      },
      updateItem,
      { payload: {} },
    );
  });

  it('Should addCategory', async () => {
    const dispatch = jest.fn();

    await runSaga(
      {
        dispatch,
      },
      addCategory,
      { payload: {} },
    );
  });
});

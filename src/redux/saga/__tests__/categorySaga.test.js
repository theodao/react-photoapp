import { runSaga } from 'redux-saga';
import Sinon from 'sinon';
import {
  fetchCategories,
  fetchItem,
  fetchItems,
  addItem,
  deleteItem,
  updateItem,
  addCategory,
} from '../category';
import CategoryAPI from '../../../services';

describe('Testing category saga', () => {
  it('Should fetchCategories', async () => {
    const dispatch = jest.fn();
    const stubbedGetListCategories = Sinon.stub(
      CategoryAPI,
      'getListCategories',
    ).resolves({
      status: 200,
    });
    await runSaga(
      {
        dispatch,
      },
      fetchCategories,
      { payload: {} },
    );

    expect(stubbedGetListCategories.called).toEqual(true);

    stubbedGetListCategories.restore();
  });

  it('Should fetchItems', async () => {
    const dispatch = jest.fn();
    const stubbedGetListItems = Sinon.stub(
      CategoryAPI,
      'getListItems',
    ).resolves({
      status: 200,
    });
    await runSaga(
      {
        dispatch,
      },
      fetchItems,
      { payload: {} },
    );

    expect(stubbedGetListItems.called).toEqual(true);

    stubbedGetListItems.restore();
  });

  it('Should fetchItem', async () => {
    const dispatch = jest.fn();
    const stubbedGetItemDetail = Sinon.stub(
      CategoryAPI,
      'getItemDetail',
    ).resolves({
      status: 200,
    });
    await runSaga(
      {
        dispatch,
      },
      fetchItem,
      { payload: {} },
    );
    expect(stubbedGetItemDetail.called).toEqual(true);

    stubbedGetItemDetail.restore();
  });

  it('Should addItem', async () => {
    const dispatch = jest.fn();
    const stubbedCreateNewItem = Sinon.stub(
      CategoryAPI,
      'createNewItem',
    ).resolves({
      status: 201,
    });
    await runSaga(
      {
        dispatch,
      },
      addItem,
      { payload: {} },
    );
    expect(stubbedCreateNewItem.called).toEqual(true);

    stubbedCreateNewItem.restore();
  });

  it('Should deleteItem', async () => {
    const dispatch = jest.fn();
    const stubbedDeleteItemDetail = Sinon.stub(
      CategoryAPI,
      'deleteItemDetail',
    ).resolves({
      status: 200,
    });
    await runSaga(
      {
        dispatch,
      },
      deleteItem,
      { payload: {} },
    );
    expect(stubbedDeleteItemDetail.called).toEqual(true);

    stubbedDeleteItemDetail.restore();
  });

  it('Should updateItem', async () => {
    const dispatch = jest.fn();
    const stubbedUpdateItemDetail = Sinon.stub(
      CategoryAPI,
      'updateItemDetail',
    ).resolves({
      status: 200,
    });
    await runSaga(
      {
        dispatch,
      },
      updateItem,
      { payload: { onSuccess: () => {} } },
    );
    expect(stubbedUpdateItemDetail.called).toEqual(true);

    stubbedUpdateItemDetail.restore();
  });

  it('Should addCategory', async () => {
    const dispatch = jest.fn();
    const stubbedCreateNewCategory = Sinon.stub(
      CategoryAPI,
      'createNewCategory',
    ).resolves({
      status: 201,
    });
    await runSaga(
      {
        dispatch,
      },
      addCategory,
      { payload: {} },
    );
    expect(stubbedCreateNewCategory.called).toEqual(true);

    stubbedCreateNewCategory.restore();
  });
});

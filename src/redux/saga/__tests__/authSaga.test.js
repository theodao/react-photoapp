import { runSaga } from 'redux-saga';
import Sinon from 'sinon';
import CategoryAPI from '../../../services';
import { login, logout, signup } from '../authSaga';

describe('Testing auth saga', () => {
  it('Should login', async () => {
    const dispatch = jest.fn();
    const stubbedLogIn = Sinon.stub(CategoryAPI, 'login').resolves({
      status: 200,
      data: {
        access_token: '1',
      },
    });
    await runSaga(
      {
        dispatch,
      },
      login,
      {
        payload: {
          history: {
            push: jest.fn(),
          },
        },
      },
    );

    expect(stubbedLogIn.called).toEqual(true);

    stubbedLogIn.restore();
  });

  it('Should logout', async () => {
    const dispatch = jest.fn();
    await runSaga(
      {
        dispatch,
      },
      logout,
      { payload: {} },
    );
  });

  it('Should signup', async () => {
    const dispatch = jest.fn();
    const stubbedSignUp = Sinon.stub(CategoryAPI, 'signup').resolves({
      status: 200,
    });
    await runSaga(
      {
        dispatch,
      },
      signup,
      { payload: {} },
    );

    expect(stubbedSignUp.called).toEqual(true);

    stubbedSignUp.restore();
  });
});

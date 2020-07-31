import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import _get from 'lodash/get';
import Http from '../../utils/HttpUtils';

const withErrorHandler = (WrappedComponent) => {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
      };
    }

    componentDidMount() {
      this.reqInterceptor = Http.interceptors.request.use((req) => {
        this.setState({ error: null });
        return req;
      });

      this.resInterceptor = Http.interceptors.response.use(
        (res) => {
          if (typeof res.data !== 'object') {
            Promise.reject(res);
          }

          return res;
        },
        (err) => {
          /** Custom behavior of error status code here  */
          const errorObject = _get(err, 'response.data', {});
          return Promise.reject(errorObject);
        },
      );
    }

    componentDidCatch(error) {
      this.setState({ error });
    }

    componentWillUnmount() {
      Http.interceptors.request.eject(this.reqInterceptor);
      Http.interceptors.response.eject(this.resInterceptor);
    }

    render() {
      return (
        <>
          <WrappedComponent />
        </>
      );
    }
  };
};

export default withErrorHandler;

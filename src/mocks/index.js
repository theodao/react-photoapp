const mockModule = () => {
  jest.mock('react-router-dom', () => {
    return {
      withRouter: (Component) => Component,
    };
  });
};

export default mockModule;

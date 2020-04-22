export const mockInstanceMethod = jest.fn();
export const mockArrowFunction = jest.fn();

const mock = jest.fn().mockImplementation(() => {
  return {
    instanceMethod: mockInstanceMethod,
    arrowFunction: mockArrowFunction,
  };
});

export default mock;

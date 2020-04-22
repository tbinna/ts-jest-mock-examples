import MyClass from "./MyClass";
import { mocked } from "ts-jest/utils";

jest.mock("./MyClass");

// If you don't want to use the manual mock from the __mocks__ directory you can
// use jest.mock with the module factory argument to create the mock directly here.
// If you use this you have to comment the jest.mock call above.
// @see https://jestjs.io/docs/en/es6-class-mocks#calling-jestmockdocsenjest-objectjestmockmodulename-factory-options-with-the-module-factory-parameter
//
// const mockInstanceMethod = jest.fn();
// const mockArrowFunction = jest.fn();
//
// jest.mock('./MyClass', jest.fn(() => {
//   return jest.fn().mockImplementation(() => {
//     return {
//       instanceMethod: mockInstanceMethod,
//       arrowFunction: mockArrowFunction
//     }
//   });
// }));

describe("MyClass", () => {

  const myClass = mocked(new MyClass());

  beforeEach(() => {
    myClass.instanceMethod.mockClear();
    myClass.arrowFunction.mockClear();
  });

  it("should check the constructor has been called", () => {
    new MyClass();
    expect(MyClass).toBeCalledTimes(1);
  });

  it("should call mocked instanceMethod", () => {
    const result = myClass.instanceMethod("Peter");

    expect(myClass.instanceMethod).toBeCalledWith("Peter");
    // result is undefined because we did not change the default mock
    // implementation of instanceMethod which is jest.fn() and simply returns
    // undefined.
    expect(result).toBeUndefined();
  });

  it("should change the instanceMethod mock implementation", () => {
    myClass.instanceMethod.mockImplementationOnce((s: string) => `Hi, ${s}`);
    const result = myClass.instanceMethod("Peter");

    expect(myClass.instanceMethod).toBeCalledWith("Peter");
    expect(result).toBe("Hi, Peter");
  });

  it("should call mocked arrowFunction", () => {
    const result = myClass.arrowFunction("Joe");

    expect(myClass.arrowFunction).toBeCalledWith("Joe");
    expect(result).toBeUndefined();
  });

  it("should change the arrowFunction mock implementation", () => {
    myClass.arrowFunction.mockImplementation((s: string) => `Bonjour, ${s}`);

    const result = myClass.arrowFunction("Joe");

    expect(myClass.arrowFunction).toBeCalledWith("Joe");
    expect(result).toBe("Bonjour, Joe");
  });

});

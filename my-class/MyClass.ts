class MyClass {

  public instanceMethod(s: string): string {
    return `Hello ${s} from instance method`;
  }

  public arrowFunction = (s: string): string => `Hello ${s} from arrow function`

}

export default MyClass;

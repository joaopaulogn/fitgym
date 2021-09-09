export default class Password {
  public constructor(private value: string) {
    this.value = value;
  }

  protected getValue(): string {
    return this.value;
  }

  public isValid(): boolean {
    const ruleValidation = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    const value = this.getValue();

    return ruleValidation.test(value);
  }
}

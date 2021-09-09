export default class Name {
  public constructor(private value: string) {
    this.value = value;
  }

  protected getValue(): string {
    return this.value;
  }

  public isValid(): boolean {
    const value = this.getValue();

    return value.length > 0;
  }
}

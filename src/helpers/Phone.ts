export default class Phone {
  public constructor(private value: string) {
    this.value = value;
  }

  protected getValue(): string {
    return this.value;
  }

  public isValid(): boolean {
    const value = this.getValue();
    const rule = /\(\d{2,}\) \d{4,}-\d{4}/;

    return rule.test(value);
  }
}

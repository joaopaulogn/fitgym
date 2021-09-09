export default class Measure {
  public constructor(private value: string) {
    this.value = value;
  }

  protected getValue(): string {
    return this.value;
  }

  public clearValue(): number {
    return Number(this.value.replace('.', ''));
  }

  public isValid(): boolean {
    const cleanValue = this.clearValue();
    const value = this.getValue();

    return !Number.isNaN(cleanValue) && value.length > 0;
  }
}

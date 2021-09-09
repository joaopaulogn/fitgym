export default class CNPJ {
  public constructor(private value: string) {
    this.value = value;
  }

  protected getValue(): string {
    return this.value;
  }

  public clearValue(): string {
    return this.value
      .replace('.', '')
      .replace('.', '')
      .replace('/', '')
      .replace('-', '');
  }

  public maskValue(): string {
    const ruleValidation = /^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/;

    return this.value.replace(ruleValidation, '$1.$2.$3/$4-$5');
  }

  public isValid(): boolean {
    const cleanValue = this.clearValue();

    return cleanValue.length === 14;
  }
}

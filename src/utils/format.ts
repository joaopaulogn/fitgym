export function clearCNPJValue(): string {
  const { value } = document.getElementById('cnpj') as HTMLInputElement;

  return value
    .replace('.', '')
    .replace('.', '')
    .replace('/', '')
    .replace('-', '');
}

export function maskCNPJValue(): string {
  const { value } = document.getElementById('cnpj') as HTMLInputElement;
  const ruleValidation = /^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/;

  return value.replace(ruleValidation, '$1.$2.$3/$4-$5');
}

export function clearMeasureValue(): number {
  const { value } = document.querySelector('.measure') as HTMLInputElement;

  return Number(value.replace('.', ''));
}

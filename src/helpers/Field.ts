export default class Field {
  public constructor(private element: HTMLInputElement) {
    this.element = element;
  }

  protected getInstructionMessage(): HTMLSpanElement {
    return this.element.parentElement?.querySelector(
      '.instructions',
    ) as HTMLSpanElement;
  }

  public showInstructionMessage(): void {
    this.getInstructionMessage().classList.remove('hidden');
    this.getInstructionMessage().setAttribute('aria-hidden', 'false');
  }

  public hideInstructionMessage(): void {
    this.getInstructionMessage().classList.add('hidden');
    this.getInstructionMessage().setAttribute('aria-hidden', 'true');
  }

  public setErrorState(): void {
    if (this.getInstructionMessage()) this.hideInstructionMessage();

    this.element.classList.remove('valid');
    this.element.classList.add('invalid');
  }

  public setDefaultState(): void {
    if (this.getInstructionMessage()) this.showInstructionMessage();

    this.element.classList.remove('invalid');
    this.element.classList.add('valid');
  }
}

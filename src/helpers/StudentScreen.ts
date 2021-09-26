import LocalStorageRepository from '../repositories/LocalStorageRepository';

interface IStudentScreen {
  labels: NodeListOf<HTMLSpanElement>;
  select: HTMLUListElement;
  fields: NodeListOf<HTMLDivElement>;
  instructions: NodeListOf<HTMLSpanElement>;
  trainingAmount: HTMLLIElement;
  optionsButton: HTMLSpanElement;
  options: HTMLUListElement;
}

export default class StudentScreen {
  public constructor(
    private screenType: 'create' | 'update' | 'visualization',
    private elements: IStudentScreen,
  ) {
    this.screenType = screenType;
    this.elements = elements;
  }

  protected getScreenType(): string {
    return this.screenType;
  }

  protected getElements(): IStudentScreen {
    return this.elements;
  }

  public setViewMode(): void {
    const storageStudent: LocalStorageRepository = new LocalStorageRepository();
    const {
      fields,
      labels,
      select,
      optionsButton,
      options,
      instructions,
      trainingAmount,
    } = this.getElements();
    const student = storageStudent.getStudentData();

    fields.forEach((field): void => {
      const input = field.firstElementChild as HTMLInputElement;

      field.classList.add('visualization');
      input.removeAttribute('placeholder');
      input.setAttribute('readonly', 'true');
      input.value = student[input.name];
    });

    trainingAmount.innerText = student.trainingAmount;
    instructions.forEach((instruction) => instruction.remove());
    labels.forEach((label) => label.classList.add('visible'));
    select.classList.add('visualization');
    optionsButton.remove();
    options.remove();
  }
}

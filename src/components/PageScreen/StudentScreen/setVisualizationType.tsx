function setVisualizationType(
  screenType: 'create' | 'update' | 'visualization',
): void {
  const roleLabels = document.querySelectorAll('label > .role');
  const select = document.querySelector('.select');
  const fields = document.querySelectorAll('[datatype="field"]');
  const instructionsText = document.querySelectorAll('.instructions');
  const trainingAmount = document.querySelector(
    '.selectedOption',
  ) as HTMLLIElement;

  if (screenType === 'visualization') {
    const optionsButton = document.querySelector('[role="button"]');
    const options = optionsButton?.previousElementSibling;
    const storageData = localStorage.getItem('studentData') as string;
    const student = JSON.parse(storageData);

    fields.forEach((field): void => {
      const input = field.firstElementChild as HTMLInputElement;

      field.classList.add('visualization');
      input.removeAttribute('placeholder');
      input.setAttribute('readonly', 'true');
      input.value = student[input.name];
    });

    trainingAmount.innerText = student.traningAmount;

    instructionsText.forEach((instruction) => instruction.remove());
    roleLabels.forEach((labelRole) => labelRole.classList.add('visible'));
    select?.classList.add('visualization');
    optionsButton?.remove();
    options?.remove();
  }
}

export default setVisualizationType;

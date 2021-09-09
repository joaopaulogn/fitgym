import React, {
  ChangeEvent,
  useState,
  MouseEvent,
  KeyboardEvent,
  useEffect,
} from 'react';
import StudentScreen from '../../../helpers/StudentScreen';
import StudentsScreen from './view';

interface StudentScreenContainerProps {
  screenType: 'create' | 'update' | 'visualization';
}

const StudentScreenContainer = ({
  screenType,
}: StudentScreenContainerProps): JSX.Element => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    phone: '',
    traningAmount: '- Selecione -',
    height: '',
    weight: '',
    fatPercentage: '',
    forearm: '',
  });

  function storeData(): void {
    const student = {
      name: 'João Paulo Gonçalves Neto',
      email: 'joaopaulo.goncalves.neto@outlook.com',
      phone: '(31) 92003-8601',
      traningAmount: '3x na semana',
    };
    localStorage.setItem('studentData', JSON.stringify(student));
  }

  storeData();

  useEffect(() => {
    const labels = document.querySelectorAll(
      '.role',
    ) as NodeListOf<HTMLSpanElement>;
    const select = document.querySelector('.select') as HTMLUListElement;
    const fields = document.querySelectorAll(
      '[datatype="field"]',
    ) as NodeListOf<HTMLDivElement>;
    const instructions = document.querySelectorAll(
      '.instructions',
    ) as NodeListOf<HTMLSpanElement>;
    const trainingAmount = document.querySelector(
      '.selectedOption',
    ) as HTMLLIElement;
    const optionsButton = document.querySelector(
      '[role="button"]',
    ) as HTMLSpanElement;
    const options = optionsButton.previousElementSibling as HTMLUListElement;

    const viewMode: StudentScreen = new StudentScreen(screenType, {
      labels,
      select,
      fields,
      instructions,
      trainingAmount,
      optionsButton,
      options,
    });

    if (screenType === 'visualization') viewMode.setViewMode();
  }, [screenType]);

  function handleSelectedOption(
    event: MouseEvent<HTMLSpanElement> | KeyboardEvent<HTMLSpanElement>,
  ): void {
    const button = event.currentTarget;
    const selectContainer = event.currentTarget.parentElement;
    const selectedOption = selectContainer?.firstElementChild as HTMLLIElement;
    const optionsContainer = selectedOption?.nextElementSibling as HTMLDivElement;
    const html = document.documentElement;

    optionsContainer.classList.add('active');

    html.addEventListener('click', (event) => hiddeOptions(event));

    function hiddeOptions(event: Event): void {
      const element = event.target as HTMLElement;
      const options = Array.from(optionsContainer.children);

      if (
        !element.contains(optionsContainer) &&
        element !== button &&
        element !== selectedOption
      ) {
        optionsContainer.classList.remove('active');
      }

      options.forEach((option) => {
        if (element === option) {
          selectedOption.innerText = (option as HTMLLIElement).innerText;
          selectContainer?.classList.add('active');
        }
      });
    }
  }

  function handleValue(event: ChangeEvent<HTMLInputElement>): void {
    const { name, value } = event.target;

    setValues(() => ({ ...values, [name]: value }));
  }

  return (
    <StudentsScreen
      screenType={screenType}
      values={values}
      handleValue={handleValue}
      handleSelectedOption={handleSelectedOption}
    />
  );
};
export default StudentScreenContainer;

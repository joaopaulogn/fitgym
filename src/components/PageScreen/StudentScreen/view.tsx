import React, { ChangeEvent, KeyboardEvent, MouseEvent } from 'react';
import Container from './style';
import Logo from '../../Logo';
import Subheading from '../../Subheading';
import Link from '../../Link';
import NameField from '../../Field/Name';
import EmailField from '../../Field/Email';
import PhoneField from '../../Field/Phone';
import MeasureField from '../../Field/Measure';
import Menu from '../../Menu/Student/view';

interface StudentsScreenProps {
  screenType: 'create' | 'update' | 'visualization';
  values: {
    name: string;
    email: string;
    phone: string;
    traningAmount: string;
    height: string;
    weight: string;
    fatPercentage: string;
    forearm: string;
  };
  handleValue(event: ChangeEvent<HTMLInputElement>): void;
  handleSelectedOption(
    event: MouseEvent<HTMLSpanElement> | KeyboardEvent<HTMLSpanElement>,
  ): void;
}

const StudentsScreen = ({
  screenType,
  values,
  handleValue,
  handleSelectedOption,
}: StudentsScreenProps): JSX.Element => (
  <Container className="wrapper">
    <aside>
      <Logo color="primary" />
      <Menu screen={screenType} />
    </aside>

    <div className="container">
      <section className="main-data">
        <Subheading text="Dados principais" />
        <form noValidate method="POST">
          <label htmlFor="name">
            <span className="role">Nome:</span>
            <NameField
              value={values.name}
              handleValue={handleValue}
              placeholder="Nome"
            />
          </label>

          <label htmlFor="email">
            <span className="role">Email:</span>
            <EmailField
              value={values.email}
              title="E-mail do aluno"
              placeholder="E-mail"
              handleValue={handleValue}
            />
          </label>

          <label htmlFor="phone">
            <span className="role">Telefone:</span>
            <PhoneField
              value={values.phone}
              title="Telefone do aluno"
              placeholder="Telefone"
              handleValue={handleValue}
            />
          </label>

          <label htmlFor="traningAmount">
            <span className="role">Quantidade de treino:</span>
            <ul className="select" id="trainingAmount">
              <li className="selectedOption">{values.traningAmount}</li>
              <ul className="options">
                <li className="option">3x na semana</li>
                <li className="option">4x na semana</li>
                <li className="option">Todos os dias</li>
              </ul>

              <span
                aria-label="Extend options"
                role="button"
                tabIndex={0}
                className="material-icons-outlined"
                onClick={handleSelectedOption}
                onKeyDown={handleSelectedOption}
              />
            </ul>
          </label>
        </form>
      </section>
      <section className="body-measurements">
        <Subheading text="Medidas corporais" />
        <form action="." noValidate method="POST">
          <div className="main-measurements">
            <MeasureField
              name="height"
              title="Altura"
              value={values.height}
              measureType="cm"
              handleValue={handleValue}
            />
            <MeasureField
              name="weight"
              title="Peso"
              value={values.weight}
              measureType="kg"
              handleValue={handleValue}
            />
            <MeasureField
              name="fatPercentage"
              title="Percentual de gordura"
              value={values.fatPercentage}
              measureType="%"
              handleValue={handleValue}
            />
          </div>

          <div className="measurements">
            <MeasureField
              name="forearm"
              title="Antebraço"
              value={values.forearm}
              measureType="cm"
              handleValue={handleValue}
            />
            <MeasureField
              name="forearm"
              title="Antebraço"
              value={values.forearm}
              measureType="cm"
              handleValue={handleValue}
            />
            <MeasureField
              name="forearm"
              title="Antebraço"
              value={values.forearm}
              measureType="cm"
              handleValue={handleValue}
            />
            <MeasureField
              name="forearm"
              title="Antebraço"
              value={values.forearm}
              measureType="cm"
              handleValue={handleValue}
            />
            <MeasureField
              name="forearm"
              title="Antebraço"
              value={values.forearm}
              measureType="cm"
              handleValue={handleValue}
            />
            <MeasureField
              name="forearm"
              title="Antebraço"
              value={values.forearm}
              measureType="cm"
              handleValue={handleValue}
            />
            <MeasureField
              name="forearm"
              title="Antebraço"
              value={values.forearm}
              measureType="cm"
              handleValue={handleValue}
            />
            <MeasureField
              name="forearm"
              title="Antebraço"
              value={values.forearm}
              measureType="cm"
              handleValue={handleValue}
            />
            <MeasureField
              name="forearm"
              title="Antebraço"
              value={values.forearm}
              measureType="cm"
              handleValue={handleValue}
            />
            <MeasureField
              name="forearm"
              title="Antebraço"
              value={values.forearm}
              measureType="cm"
              handleValue={handleValue}
            />
            <MeasureField
              name="forearm"
              title="Antebraço"
              value={values.forearm}
              measureType="cm"
              handleValue={handleValue}
            />
            <MeasureField
              name="forearm"
              title="Antebraço"
              value={values.forearm}
              measureType="cm"
              handleValue={handleValue}
            />
            <MeasureField
              name="forearm"
              title="Antebraço"
              value={values.forearm}
              measureType="cm"
              handleValue={handleValue}
            />
            <MeasureField
              name="forearm"
              title="Antebraço"
              value={values.forearm}
              measureType="cm"
              handleValue={handleValue}
            />
            <MeasureField
              name="forearm"
              title="Antebraço"
              value={values.forearm}
              measureType="cm"
              handleValue={handleValue}
            />
            <MeasureField
              name="forearm"
              title="Antebraço"
              value={values.forearm}
              measureType="cm"
              handleValue={handleValue}
            />
            <MeasureField
              name="forearm"
              title="Antebraço"
              value={values.forearm}
              measureType="cm"
              handleValue={handleValue}
            />
            <MeasureField
              name="forearm"
              title="Antebraço"
              value={values.forearm}
              measureType="cm"
              handleValue={handleValue}
            />
            <MeasureField
              name="forearm"
              title="Antebraço"
              value={values.forearm}
              measureType="cm"
              handleValue={handleValue}
            />
            <MeasureField
              name="forearm"
              title="Antebraço"
              value={values.forearm}
              measureType="cm"
              handleValue={handleValue}
            />
            <MeasureField
              name="forearm"
              title="Antebraço"
              value={values.forearm}
              measureType="cm"
              handleValue={handleValue}
            />
            <MeasureField
              name="forearm"
              title="Antebraço"
              value={values.forearm}
              measureType="cm"
              handleValue={handleValue}
            />
            <MeasureField
              name="forearm"
              title="Antebraço"
              value={values.forearm}
              measureType="cm"
              handleValue={handleValue}
            />
            <MeasureField
              name="forearm"
              title="Antebraço"
              value={values.forearm}
              measureType="cm"
              handleValue={handleValue}
            />
          </div>
        </form>
      </section>
      <div className="buttons">
        <Link path="/" text="Cancelar" />
        <Link path="/" text="Salvar" />
      </div>
    </div>
  </Container>
);

export default StudentsScreen;

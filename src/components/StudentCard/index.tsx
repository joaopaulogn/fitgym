import React from 'react';
import { Route, Switch } from 'react-router-dom';

interface StudentCardProps {
  personalDataStep?: boolean;
  personalLengthStep?: boolean;
  personalDataContent: React.ReactElement;
  personalLengthContent: React.ReactElement;
}

const StudentCard = ({
  personalDataStep,
  personalLengthStep,
  personalDataContent,
  personalLengthContent,
}: StudentCardProps) => (
  <section className="card">
    <div className="steps text-normal">
      <span>{`${personalDataStep ? '1.' : ''} Dados pessoais`}</span>
      <span>{`${personalLengthStep ? '2.' : ''} Medidas`}</span>
    </div>

    <Switch>
      <Route path="/">
        <div className="content">{personalDataContent}</div>
      </Route>
      <Route>
        <div className="content">{personalLengthContent}</div>
      </Route>
    </Switch>
  </section>
);

StudentCard.defaultProps = {
  personalDataStep: true,
  personalLengthStep: true,
};

export default StudentCard;

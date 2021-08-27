import React, { LiHTMLAttributes } from 'react';
import Icon from '../Icon';
import Container from './style';

interface StudentDataProps extends LiHTMLAttributes<HTMLLIElement> {
  id: string | undefined;
  name: string | undefined;
  email: string | undefined;
  phone: string | undefined;
  trainingAmount: string | undefined;
}

const StudentInfo = ({
  id,
  name,
  email,
  phone,
  trainingAmount,
}: StudentDataProps): JSX.Element => (
  <Container className="text-normal" id={id}>
    <div className="data">
      <Icon icon="person_outline" />
      <span className="name">{name}</span>
    </div>

    <div className="data">
      <Icon icon="alternate_email" />
      <span className="email">{email}</span>
    </div>

    <div className="data">
      <Icon icon="phone" />
      <span className="phone">{phone}</span>
    </div>

    <div className="data">
      <Icon icon="repeat" />
      <span className="trainingAmount">{trainingAmount}</span>
    </div>
  </Container>
);

export default StudentInfo;

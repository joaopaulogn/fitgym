import React from 'react';
import Icon from '../Icon';
import Container from './style';

// interface StudentDataProps {
//   name: string;
//   email: string;
//   phone: string;
//   repeatTime: string;
// }

const StudentInfo = () => (
  <Container className="text-normal">
    <td className="data">
      <Icon icon="person_outline" />
      <span>João Paulo Gonçalves Neto</span>
    </td>

    <td className="data">
      <Icon icon="alternate_email" />
      <span>joaopaulo.gn@outlook.com</span>
    </td>

    <td className="data">
      <Icon icon="phone" />
      <span>(31) 92003-8601</span>
    </td>

    <td className="data">
      <Icon icon="repeat" />
      <span>3x na semana</span>
    </td>
  </Container>
);

export default StudentInfo;

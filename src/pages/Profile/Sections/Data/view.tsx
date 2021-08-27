import React from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import Container from '../style';
import Data from '../../../../components/DataView/index';
import PasswordVisibility from '../../../../components/PasswordVisibility';
import Button from '../../../../components/Button';

interface DataViewProps {
  name: string | undefined;
  cnpj: string | undefined;
  passwordValue: string;
}

const DataView = ({
  name,
  cnpj,
  passwordValue,
}: DataViewProps): JSX.Element => {
  const history = useHistory();
  const { url } = useRouteMatch();

  return (
    <Container>
      <p className="text text-normal">
        <span>Esses são os seus dados atuais.</span>
        <span>Clique no botão abaixo para ir para a página de edição.</span>
      </p>

      <Data roleText="Nome">{name}</Data>
      <Data roleText="CNPJ">{cnpj}</Data>
      <Data roleText="Senha">
        <>
          <input
            type="password"
            name="password"
            id="password"
            readOnly
            value={passwordValue}
          />
          <PasswordVisibility />
        </>
      </Data>
      <Button
        text="Editar"
        width="small"
        onClick={() => history.push(`${url}/redefinir-senha`)}
      />
    </Container>
  );
};

export default DataView;

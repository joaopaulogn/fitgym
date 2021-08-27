import React from 'react';
import useAuthContext from '../../../../contexts/auth';
import DataView from './view';

interface DataContainerProps {
  passwordValue: string;
}

const DataContainer = ({ passwordValue }: DataContainerProps): JSX.Element => {
  const { user } = useAuthContext();
  const name = user?.name;
  const cnpj = user?.cnpj;

  return <DataView name={name} cnpj={cnpj} passwordValue={passwordValue} />;
};

export default DataContainer;

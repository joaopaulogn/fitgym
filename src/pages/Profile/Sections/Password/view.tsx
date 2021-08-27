import React, { ChangeEvent, FormEvent } from 'react';
import Container from '../style';
import PasswordField from '../../../../components/Field/Password';
import Form from '../../../../components/Form';

interface ResetPasswordProps {
  values: { password: string; password2: string };
  handleValue(event: ChangeEvent<HTMLInputElement>): void;
  handleValue2(event: ChangeEvent<HTMLInputElement>): void;
  handlePasswordReset(event: FormEvent): void;
}

const ResetPassword = ({
  values,
  handleValue,
  handleValue2,
  handlePasswordReset,
}: ResetPasswordProps): JSX.Element => (
  <Container>
    <p className="text text-normal">Redefina sua senha abaixo</p>
    <Form button="Redefinir" onSubmit={handlePasswordReset}>
      <>
        <PasswordField value={values.password} handleValue={handleValue} />
        <PasswordField
          name="confirmPassword"
          title="Confirme sua senha"
          placeholder="Confirmar senha"
          value={values.password2}
          handleValue={handleValue2}
          instructionMessage="As senhas devem seguir o padrão citado acima e serem idênticas."
        />
      </>
    </Form>
  </Container>
);

export default ResetPassword;

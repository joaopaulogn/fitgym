import React from 'react';
import Container from './style';
import Banner from '../../assets/contact.svg';
import Button from '../../components/Button';
import PageScreen from '../../components/PageScreen';
import Radio from '../../components/Radio';

const Contact = () => {
  function activeOptions({ currentTarget }: React.MouseEvent) {
    currentTarget.parentElement?.parentElement?.parentElement?.nextElementSibling?.classList.add(
      'active',
    );
  }

  function disableOptions({ currentTarget }: React.MouseEvent) {
    currentTarget.parentElement?.parentElement?.parentElement?.nextElementSibling?.classList.remove(
      'active',
    );
  }

  return (
    <PageScreen
      heading="Contate-nos"
      subheading="Entre em contato com a gente"
      bannerSrc={Banner}
      bannerAlt="Contact-us banner"
    >
      <Container action="." method="POST" noValidate>
        <div className="group">
          <p>Qual o motivo do contato?</p>
          <div className="options">
            <Radio
              name="reasonContact"
              id="reasonContactBug"
              text="Bug (Erro da aplicação)"
              onClick={activeOptions}
            />

            <Radio
              name="reasonContact"
              id="reasonContactFeedback"
              text="Dúvida/Feedback"
              onClick={disableOptions}
            />
          </div>
        </div>

        <div className="group">
          <p> O sistema fechou após o erro acontecer?</p>
          <div className="options">
            <Radio name="systemError" id="systemErrorYes" text="Sim" />
            <Radio name="systemError" id="systemErrorNot" text="Não" />
          </div>
        </div>

        <div className="group">
          <p>
            Deixe abaixo sua mensagem. Por gentileza, pedimos que detalhe o
            máximo possível.
          </p>
          <textarea name="messageContact" id="messageContact" />
        </div>

        <Button text="Enviar" width="34rem" />
      </Container>
    </PageScreen>
  );
};

export default Contact;

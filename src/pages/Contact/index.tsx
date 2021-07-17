import React from 'react';
import Container from './style';
import DashboardScreen from '../../components/PageScreen/Dashboard';
import Form from '../../components/Form';
import Radio from '../../components/Radio';
import Banner from '../../components/Banner';
import Src from '../../assets/contact.svg';

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
    <DashboardScreen
      heading="Contate-nos"
      subheading="Entre em contato com a gente"
    >
      <Container>
        <Form button="Enviar" className="contact">
          <>
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
                Deixe abaixo sua mensagem. Por gentileza, <br /> pedimos que
                detalhe o máximo possível.
              </p>
              <textarea name="messageContact" id="messageContact" />
            </div>
          </>
        </Form>

        <Banner src={Src} alt="Contact page" />
      </Container>
    </DashboardScreen>
  );
};

export default Contact;

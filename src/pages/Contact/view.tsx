import React, { MouseEvent } from 'react';
import DashboardScreen from '../../components/PageScreen/Dashboard';
import Container from './style';
import Form from '../../components/Form';
import Radio from '../../components/Radio';
import Banner from '../../components/Banner';
import image from '../../assets/contact.svg';

interface ContactProps {
  handleActiveOptions(event: MouseEvent<HTMLInputElement>): void;
  handleDisabledOptions(event: MouseEvent<HTMLInputElement>): void;
}

const Contact = ({
  handleActiveOptions,
  handleDisabledOptions,
}: ContactProps): JSX.Element => (
  <DashboardScreen
    heading="Contate-nos"
    subheading="Entre em contato com a gente"
  >
    <Container>
      <Form button="Enviar" className="contact about">
        <>
          <div className="group">
            <p>Qual o motivo do contato?</p>
            <div className="options">
              <Radio
                name="reasonContact"
                id="reasonContactBug"
                text="Bug (Erro da aplicação)"
                onClick={handleActiveOptions}
              />

              <Radio
                name="reasonContact"
                id="reasonContactFeedback"
                text="Dúvida/Feedback"
                onClick={handleDisabledOptions}
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

      <Banner src={image} alt="Contact page" />
    </Container>
  </DashboardScreen>
);

export default Contact;

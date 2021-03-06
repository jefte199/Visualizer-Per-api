import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { RiArrowGoBackLine } from 'react-icons/ri';
import Container from '../../components/Container';
import Input from '../../components/Input';
import TextArea from '../../components/TextArea';
import Button from '../../components/Button';
import constants from '../../constants/routes.json';

const Form = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  flex-direction: column;
  align-items: center;
`;

const SplashConfiguration = () => {
  const history = useHistory();

  const originInputRef = React.useRef<HTMLInputElement>(null);
  const resourcesTextAreaRef = React.useRef<HTMLTextAreaElement>(null);

  function handleSubmit() {
    localStorage.setItem('splashed', 'true');
    if (!originInputRef) return;
    if (!resourcesTextAreaRef) return;
    const { current: originInputElement } = originInputRef;
    const { current: resourcesTextAreaElement } = resourcesTextAreaRef;
    localStorage.setItem('origin', String(originInputElement?.value));
    localStorage.setItem('resources', String(resourcesTextAreaElement?.value));
  }

  return (
    <Container>
      <RiArrowGoBackLine
        style={{
          position: 'absolute',
          top: 5,
          left: 5,
          fontSize: '1.5rem',
          cursor: 'pointer',
        }}
        onClick={() => history.push(constants.HOME)}
      />
      <Form>
        <p style={{ margin: '0.5rem 0 1rem 0' }}>Link da API</p>
        <Input style={{ margin: '0 0 1rem 0' }} ref={originInputRef}>
          {localStorage.getItem('origin')}
        </Input>
        <p style={{ margin: '0 0 1rem 0' }}>Recursos get:</p>
        <TextArea
          style={{ height: '25rem', margin: '0 0 2rem 0' }}
          ref={resourcesTextAreaRef}
        >
          {localStorage.getItem('resources')}
        </TextArea>
        <Button style={{ margin: '1rem' }} onClick={handleSubmit}>
          Confirmar
        </Button>
      </Form>
    </Container>
  );
};

export default SplashConfiguration;

import React from 'react';
import Wrapper from '../../components/wrapper';
import { Container, Headline } from './style';
import { ContentArea } from '../../components/wrapper/style';

const Home = () => {
  return (
    <Container>
      <Wrapper>
        <ContentArea>
          <Headline>I am the Home</Headline>
        </ContentArea>
      </Wrapper>
    </Container>
  );
};

export default Home;

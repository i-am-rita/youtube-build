import React from 'react';
import { Container } from './style';
import Nav from '../nav';
import MainSidebar from '../main-sidebar';

const Wrapper = () => {
  return (
    <Container>
      <Nav />
      <MainSidebar />
    </Container>
  );
};

export default Wrapper;

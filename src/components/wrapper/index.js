import React from 'react';
import { Container, NavArea, SideArea } from './style';
import Nav from '../nav';
import MainSidebar from '../main-sidebar';

const Wrapper = () => {
  return (
    <Container>
      <NavArea>
        <Nav />
      </NavArea>
      <SideArea>
        <MainSidebar />
      </SideArea>
    </Container>
  );
};

export default Wrapper;

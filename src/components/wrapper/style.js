import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fx 1fr 1fr;
  grid-template-areas:
    'nav nav nav nav'
    'sidebar content content content';
`;

export const NavArea = styled.nav`
  grid-area: nav;
`;

export const SideArea = styled.div`
  grid-area: sidebar;
`;

export const ContentArea = styled.div`
  grid-area: content;
`;

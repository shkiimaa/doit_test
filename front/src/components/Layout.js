import React from 'react';
import { styled } from 'styled-components';

const Layout = ({ children }) => {
  return <LayoutContainer>{children}</LayoutContainer>;
};

export default Layout;

const LayoutContainer = styled.main`
  padding: 0 30%;
`;

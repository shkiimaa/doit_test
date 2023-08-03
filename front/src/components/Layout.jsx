import React from 'react';
import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

const Layout = ({ children }) => {
  return (
    <LayoutContainer>
      <Header>header</Header>
      <BodyContainer>
        <LeftLayout>
          <NavLink to="/">main</NavLink>
          <NavLink to="/board">board</NavLink>
          <NavLink to="/test">test</NavLink>
        </LeftLayout>
        <RightLaout>{children}</RightLaout>
      </BodyContainer>
      <Footer>footer</Footer>
    </LayoutContainer>
  );
};

export default Layout;

const RightLaout = styled.main`
  padding: 20px;
  background-color: darkgrey;
  width: 100%;
  transition: all 0.5s ease-in-out;
`;

const LayoutContainer = styled.div`
  padding: 0 25%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const LeftLayout = styled.aside`
  width: 20%;
  background-color: #999999;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const BodyContainer = styled.div`
  display: flex;
  height: 100%;
`;

const NavLink = styled(Link)`
  margin-bottom: 10px;
`;

const Footer = styled.footer`
  padding: 20px;
  background-color: #797979;
  min-height: 150px;
`;

const Header = styled.header`
  padding: 20px;
  background-color: #797979;
  min-height: 100px;
`;

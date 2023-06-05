import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import { SidebarData } from './LayoutData';
import Submenu from './Submenu';
import MenuIcon from './MenuIcon';
import '../css/Style.css';
import * as AiIcons from 'react-icons/ai';
import Avatar from '../asset/avatar.jpg';

const Nav = styled.nav`
  top: 0;
  left: 0;
  position: fixed;
  width: 100%;
  background: black;
  height: 50px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const NavIcon1 = styled(Link)`
  margin-left: 0.8rem;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: white;
  &:hover {
    color: lightblue;
  }
`;
const NavIcon2 = styled(Link)`
  margin-left: 0.8rem;
  height: 50px;
  padding-bottom: 10px;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: white;
  &:hover {
    color: lightblue;
  }
`;

const SidebarNav = styled.nav`
  background: black;
  width: 200px;
  display: flex;
  height: 100vh;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 1s;
  z-index: 10;
`;
const SidebarNav2 = styled.nav`
  background: black;
  width: 50px;
  display: flex;
  height: 100vh;
  justify-content: center;
  position: fixed;
  top: 50px;
`;
const SidebarWarp = styled.nav`
  width: 100%;
`;
const SidebarWarp2 = styled.nav`
  width: 100%;
`;

const Layout = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <Nav>
        <NavIcon1 to="#">
          <FaIcons.FaRegCaretSquareRight onClick={showSidebar} />
        </NavIcon1>
        <a href="#">
          <button className="ThemKH">Them KH</button>
        </a>
        <a href="#">
          <button className="TaoDonHang">Tao don hang</button>
        </a>

        <input type="text" placeholder="Search.."></input>
        <button className="SearchButton">
          <AiIcons.AiOutlineSearch />
        </button>
        <div className="userArea">
          Hello User!
          <div
            className="avatar"
            style={{ background: `url(${Avatar})` }}
          ></div>
          <AiIcons.AiOutlineBell />
        </div>
      </Nav>
      <SidebarNav2 sidebar={sidebar} onClick={showSidebar}>
        <SidebarWarp2>
          {SidebarData.map((item, index) => {
            return <MenuIcon item={item} key={index} />;
          })}
        </SidebarWarp2>
      </SidebarNav2>

      <SidebarNav sidebar={sidebar}>
        <SidebarWarp>
          <NavIcon2 to="#">
            <FaIcons.FaRegCaretSquareLeft onClick={showSidebar} />
          </NavIcon2>
          {SidebarData.map((item, index) => {
            return <Submenu item={item} key={index} />;
          })}
        </SidebarWarp>
      </SidebarNav>
    </>
  );
};

export default Layout;

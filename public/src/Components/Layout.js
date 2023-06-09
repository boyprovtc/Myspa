import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa'
import { SidebarData } from './LayoutData';
import Submenu from './Submenu';
import '../css/Style.css'
import * as AiIcons from 'react-icons/ai'
import Avatar from "../asset/avatar.jpg";
//import * as IoIcons from 'react-icons/io'
//import * as RiIcons from 'react-icons/ri'

const Nav = styled.nav`
top:0;
left:0;
position: fixed;
width: 100%;
background: black;
height:50px;
display: flex;
justify-content: flex-start;
align-items: center;
`;




const SidebarNav = styled.nav`
background: black;
width: 200px;
display: flex;
height: 100%;
justify-content: center;
position: fixed;
padding-top:50px;
`

const SidebarWarp = styled.nav`
width:100%;
`
const Layout = () => {
    const [sidebar, setSidebar] = useState(true)

    return (
        <>
            <Nav>
                <a href="#"><button className='ThemKH' >Them KH</button></a>
                <a href='#'><button className='TaoDonHang'>Tao don hang</button></a>
                <input type="text" placeholder="Search.."></input>
                <button className='SearchButton'><AiIcons.AiOutlineSearch /></button>
                <div className='userArea'>
                    Hello User!
                    <div className='avatar' style={{ background: `url(${Avatar})` }}></div>
                    <AiIcons.AiOutlineBell />
                </div>
            </Nav>
            <SidebarNav sidebar={sidebar}>
                <SidebarWarp>
                    {SidebarData.map((item, index) => {
                        return <Submenu item={item} key={index} />;
                    })}
                </SidebarWarp>
            </SidebarNav>
        </>
    )
}

export default Layout

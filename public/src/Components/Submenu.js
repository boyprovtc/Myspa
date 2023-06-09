import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'



const SidebarLink = styled(Link)`
display:flex;
color:white;
justify-content: space-between;
align-items: center;
height:50px;
padding-left:20px;
text-decoration: none;
font-size: 18px;
border-bottom: 0.05px solid rgb(132, 132, 133);
&:hover{
    background: #363636;
    border-left:3px solid lightgray;
    cursor: pointer;
}
`

const SidebarLabel = styled.span`
margin-left: 16px;
color:White;
font-size:16px;
`
const SidebarLabel2 = styled.span`
margin-left: 5px;
color:White;
font-size:13px;
`
const DropIcon = styled.span`
padding-right:10px;
font-size: 10px;
`
const ItemIcon = styled.span`
font-size: 15px;
`
const DropdownLink = styled(Link)`
background: #black;
height: 30px;
padding-left: 2rem;
display:flex;
align-items: center;
text-decoration: none;
color:white;
font-size:18px;
border-bottom: 0.05px solid rgb(132, 132, 133);
&:hover{
    background: #363636;
    cursor: pointer;
    border-left:3px solid lightgray;


`



const Submenu = ({ item }) => {
    const [subnav, setSubnav] = useState(false)
    const showSubnav = () => setSubnav(!subnav)
    return (

        <>
            <SidebarLink to={item.path} onClick={item.subNav && showSubnav}>
                <div>
                    <ItemIcon>{item.icon}</ItemIcon>
                    <SidebarLabel>{item.title}</SidebarLabel>
                </div>
                <DropIcon>
                    {item.subNav && subnav ? item.iconOpened : item.subNav ? item.iconClosed : null}
                </DropIcon>
            </SidebarLink>
            {subnav && item.subNav.map((item, index) => {
                return (<DropdownLink to={item.path} key={index}>
                    <SidebarLabel2>{item.title}</SidebarLabel2>
                </DropdownLink>)
            })}

        </>
    )
}

export default Submenu
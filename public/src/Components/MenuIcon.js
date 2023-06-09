import React, { } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'




const SidebarLink = styled(Link)`
display:flex;
color:white;
justify-content: space-between;
align-items: center;
height:50px;
padding-left:17px;
text-decoration: none;
font-size: 18px;
border-bottom: 0.05px solid rgb(132, 132, 133);
&:hover{
    background: #363636;
    border-left:3px solid lightgray;
    cursor: pointer;
}
`
const ItemIcon = styled.span`
font-size: 15px;
`



const Submenu = ({ item }) => {
    return (
        <>
            <SidebarLink to={item.path}>
                <div>
                    <ItemIcon>{item.icon}</ItemIcon>
                </div>
            </SidebarLink>
        </>
    )
}

export default Submenu
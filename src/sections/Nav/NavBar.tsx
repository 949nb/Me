import React, {} from 'react'
import { NavItem, NavLeft, NavRight, NavWrapper } from './StyleComonent'

export const NavBar: React.FC = () => {

    return (
        <NavWrapper>
            <NavLeft>
                <NavItem>Me.</NavItem>
            </NavLeft>
            <NavRight>
                <NavItem>关于我</NavItem>
                <NavItem>项目</NavItem>
                <NavItem>找到我</NavItem>
            </NavRight>
        </NavWrapper>
    )
}
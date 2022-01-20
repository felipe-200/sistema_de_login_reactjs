import React, { useState } from "react"
import { Dropdown } from "../../components/Dropdown"
import { Header, IconHead } from "../../components/Header"
import { SideBar, Main, SideBarItem } from "../../components/SiderBar"
import { ContainerFluid } from "../../components/ContainerFluid"
import { menuIcon } from '../../components/Icons/MenuIcon'
import { Outlet } from 'react-router-dom'

export const App = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true)
  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Header>
        <IconHead onClick={toggleMenu}>
          {menuIcon}
        </IconHead>
        <h3>
          Welcome
        </h3>
        <Dropdown />
      </Header>
      <ContainerFluid>
        {
          isOpen ? (
            <SideBar>
              <SideBarItem>
                <div>List Clients</div>
              </SideBarItem>
            </SideBar>
          ) : false
        }
        <Main>
          <Outlet />
        </Main>

      </ContainerFluid>

    </>
  )
}
"use client"

import { useState } from "react";
import { LayoutContainer, MainContent, MenuButton } from "./styles";
import { Menu } from "react-feather";
import Sidebar from "../Sidebar";

const Layout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <LayoutContainer>
      <Sidebar
        isOpen={sidebarOpen}
        toggleSidebar={toggleSidebar}
      />
      <MainContent $sidebarOpen={sidebarOpen}>
        {!sidebarOpen && (
          <MenuButton onClick={toggleSidebar}>
            <Menu size={20} />
          </MenuButton>
        )}
        {children}
      </MainContent>
    </LayoutContainer>
  );
};

export default Layout;


import React from "react";
import { ReactComponent as DashboardIcon } from "../../assets/dashboardIcon.svg";
import { ReactComponent as LoremIcon } from "../../assets/loremIcon.svg";
import { ReactComponent as SettingIcon } from "../../assets/settingIcon.svg";
import { StyledSidebar, NavItems, StyledNavLink } from "./styles";

function Sidebar(props) {
  return (
    <StyledSidebar>
      <NavItems>
        <StyledNavLink to="/dashboard" activeClassName="active">
          <li>
            <DashboardIcon /> Dashboard
          </li>
        </StyledNavLink>
        <StyledNavLink to="/post" activeClassName="active">
          <li>
            <LoremIcon /> Post
          </li>
        </StyledNavLink>
        <StyledNavLink to="/settings" activeClassName="active">
          <li>
            <SettingIcon /> Ipsum
          </li>
        </StyledNavLink>
      </NavItems>
    </StyledSidebar>
  );
}

export default Sidebar;

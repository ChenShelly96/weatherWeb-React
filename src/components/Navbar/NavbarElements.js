import { FaBeer } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  background: #EFAA74;
  height: 85px;
  display: flex;
  justify-content: space-between;
  padding: 0.2rem calc((220vw - 1000px) /5);
  z-index: 12;
 
`;
 
export const NavLink = styled(Link)`
  color: #FFF;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 2rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #141E30;
  }
`;
 
export const Bars = styled(FaBeer)`
  display: none;
  color: #FFF;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;
 
export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  /* Second Nav */
  /* margin-right: 24px; */
  /* Third Nav */
  /* width: 100vw;
white-space: nowrap; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
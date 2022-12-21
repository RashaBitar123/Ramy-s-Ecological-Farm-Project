//CSS
import "./Header.css";

//Assets
import Logo from "../../assets/Rami-Eco-Farm-Logo.png";

import { useState } from "react";


import styled from "styled-components";

import { NavLink } from "react-router-dom";

const COLORS = {
  primaryDark:"rgb(178, 246, 151)",
  primaryLight:"black",
};
const MenuLabel = styled.label`
  position: fixed;
  top: 0.1px;
  right: 2rem;
  height: 10rem;
  width: 10rem;
  cursor: pointer;
  z-index: 1000;
  text-align: center;
`;
const NavBackground = styled.div`
position: fixed;
top: 6.5rem;
right:6.5rem;
background-image: radial-gradient(
  ${COLORS.primaryDark},
  ${COLORS.primaryLight}
);
height: 6rem;
  width: 6rem;
  border-radius:50%;

  transform: ${(props: { clicked: any; }) =>(props.clicked ? "scale(80)":"scale(0)")};
  transition: transform 0.8s;
`;
const Icon = styled.span`
  position: relative;
  background-color: ${(props: { clicked: any; }) => (props.clicked ? "transparent" : "black")};
  width: 3rem;
  height: 2px;
  display: inline-block;
  margin-top: 3.5rem;
  transition: all 0.3s;
  &::before,
  &::after {
    content: "";
    background-color: black;
    width: 3rem;
    height: 2px;
    display: inline-block;
    position: absolute;
    left: 0;
    transition: all 0.3s;
  }
  &::before {
    top: ${(props: { clicked: any; }) => (props.clicked ? "0" : "-0.8rem")};
    transform: ${(props: { clicked: any; }) => (props.clicked ? "rotate(135deg)" : "rotate(0)")};
  }
  &::after {
    top: ${(props: { clicked: any; }) => (props.clicked ? "0" : "0.8rem")};
    transform: ${(props: { clicked: any; }) => (props.clicked ? "rotate(-135deg)" : "rotate(0)")};
  }
  ${MenuLabel}:hover &::before {
    top: ${(props: { clicked: any; }) => (props.clicked ? "0" : "-1rem")};
  }
  ${MenuLabel}:hover &::after {
    top: ${(props: { clicked: any; }) => (props.clicked ? "0" : "1rem")};
  }
`;

const Navigation = styled.nav`
 height:100vh;
 position:fixed;
 top:0;
 right:0;
 z-index:600;
 width: ${(props: { clicked: any; })=> (props.clicked ? "100%" : "0%")};
 opacity: ${(props: { clicked: any; })=> (props.clicked ? "1" : "0")};
 transition: width 0.8s, opacity 0.8s;
`;

const List = styled.ul`
position:absolute;
list-style:none;
top:50%;
left:50%;
transform : translate(-50%,-50%);
text-align:center;
width:100%;
`;
const ItemLink = styled(NavLink)`

font-size:3rem;
font-weight:500;
text-decoration:none;
color: ${COLORS.primaryLight};
padding:1rem 2rem;

background-image: linear-gradient(
  120deg,
  transparent 0%,
  transparent 50%,
  #fff 50%
);
background-size:240%;
transition: all 0.4s;
display:flex;

&:hoover,&:active{
  background-position:100%;
  color:  ${COLORS.primaryLight};
  transform: translateX(0.5rem);
};
flex-direction:column;

align-items: stretch;

`;
function Header(){
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <><div className="header-container">
      <img className="logo" src={Logo} alt="logo" />

      <MenuLabel htmlFor="navi-toggle" onClick={handleClick}>
        <Icon clicked={click}>&nbsp;</Icon>
      </MenuLabel>
      </div>
    <NavBackground clicked={click}>&nbsp;</NavBackground><Navigation clicked={click}>
        <List>
          <li>
            <ItemLink onClick={handleClick} to="/">
              Home
            </ItemLink>
            <ItemLink onClick={handleClick} to="/mission">
              Mission
            </ItemLink>
            <ItemLink onClick={handleClick} to="/activities">
              Activities
            </ItemLink>
            <ItemLink onClick={handleClick} to="/philosophy">
              Philosophy
            </ItemLink>
            <ItemLink onClick={handleClick} to="/contactus">
              Contact Us
            </ItemLink>
          </li>
        </List>
      </Navigation>
      
      </>
     
      
  );
}
export default Header;



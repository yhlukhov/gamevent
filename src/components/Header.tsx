import { NavLink } from "react-router"
import styled from "styled-components"

export default function Header() {
  return (
    <HeaderStyled>
      <nav>
        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'/events'}>Events</NavLink>
      </nav>
    </HeaderStyled>
  )
}

const HeaderStyled = styled.header`
  & nav {
    display: flex;
    justify-content: center;
    gap: 10px;
    & a.active {
      font-weight: bold;
    }
  }
`
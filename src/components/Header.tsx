import styled from 'styled-components'
import { NavLink } from 'react-router'
import { useEffect, useState } from 'react'
import { getCookie } from '../lib/cookieManager'

export default function Header() {
  const [admin, setAdmin] = useState(false)

  useEffect(() => {
    if (!admin) {
      if (getCookie('admin')) {
        setAdmin(true)
      }
    }
  })

  return (
    <StyledHeader>
      <nav>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/events'>Events</NavLink>
        {admin && <NavLink to='/new'>New</NavLink>}
      </nav>
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  & nav {
    width: 100%;
    height: 40px;
    margin-bottom: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
    background-color: #f0f0f0;
    border-bottom: 3px solid #dddddd;
    & a {
      color: #5b410f;
      transition-duration: 100ms;
      &.active {
        font-weight: bold;
      }
      &:hover {
        transform: scale(1.05);
      }
    }
  }
`

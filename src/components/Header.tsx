import styled from 'styled-components'
import { NavLink } from 'react-router'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { getCookie } from '../lib/cookieManager'

export default function Header() {
  const [admin, setAdmin] = useState(false)
  const { t } = useTranslation()

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
        <NavLink to='/'>{t('nav.home')}</NavLink>
        <NavLink to='/events'>{t('nav.events')}</NavLink>
        {admin && <NavLink to='/new'>{t('nav.new')}</NavLink>}
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

import { Outlet } from "react-router"
import styled from "styled-components"

export default function Layout() {
  return (
    <LayoutSection>
      <Outlet />
    </LayoutSection>
  )
}

const LayoutSection = styled.section`
  
`
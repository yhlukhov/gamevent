import styled from "styled-components"
import { GamInfo, EventCarousel } from "../components"

export default function Home() {
  return (
    <HomeDiv>
      <GamInfo />
      <EventCarousel />
    </HomeDiv>
  )
}

const HomeDiv = styled.div`
  
`
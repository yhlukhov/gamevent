import styled from "styled-components"
import { GamInfo, EventCarousel, GamInfoYT } from "../components"

export default function Home() {
  return (
    <HomeDiv>
      <GamInfo />
      <EventCarousel />
      <GamInfoYT />
    </HomeDiv>
  )
}

const HomeDiv = styled.div`
  width: 100%;
  margin-bottom: 60px;
`
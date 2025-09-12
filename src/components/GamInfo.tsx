import { useEffect, useState } from 'react'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from "swiper/react"
import { getInfo } from '../api'
import type { Info } from '../types'
import styled from 'styled-components'

export default function GamInfo() {
  const [info, setInfo] = useState<Info[]>([])

  useEffect(() => {
    getInfo().then(setInfo)
  }, [])
  
  return (
    <Article>
      <img className='logo' src='/amma-bhagavan.png' alt='' />
      <Swiper
        spaceBetween={50}
        centeredSlides={true}
        autoplay={{
          delay: 30000,
          disableOnInteraction: true,
        }}
        autoHeight={true}
        modules={[Autoplay]}
        className='swiper'
      >
        {info.map((item) => (
          <Slide key={item.title}>
            <div className='title'>{item.title}</div>
            <div className='details'>{item.details}</div>
          </Slide>
        ))}
      </Swiper>
    </Article>
  )
}

const Article = styled.article`
  width: 100%;
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  & .logo {
    width: 70px;
  }
  & .swiper {
    width: 100%;
    border-bottom: 1px solid #f2f2f2;
  }
  & .swiper-slide {
    width: calc(100% - 20px) !important;
  }
`

const Slide = styled(SwiperSlide)`
  height: fit-content;
  padding: 10px;
  text-align: center;
  color: #5b410f;
  display: flex;
  flex-direction: column;
  align-items: center;
  & .title {
    margin-bottom: 4px;
    font-size: large;
    color: #b0925a;
    border-bottom: 1px solid #f2f2f2;
  }
  & .details {
    line-height: 1.5;
  }
`
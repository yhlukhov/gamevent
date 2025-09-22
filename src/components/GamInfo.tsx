import styled from 'styled-components'
import { Autoplay } from 'swiper/modules'
import { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react"
import { useTranslation } from 'react-i18next'
import type { Info } from '../types'
import { getInfo } from '../api'

export default function GamInfo() {
  const [info, setInfo] = useState<Info[]>([])
  const { i18n } = useTranslation()

  useEffect(() => {
    console.log(i18n.language.split('-')[0])
    getInfo(i18n.language.split('-')[0]).then(setInfo)
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
          pauseOnMouseEnter: true,
          stopOnLastSlide: false
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
  margin: 0 auto;
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  & .logo {
    width: 75px;
  }
  & .swiper {
    width: 100%;
    border-bottom: 1px solid #f2f2f2;
  }
`

const Slide = styled(SwiperSlide)`
  width: calc(100% - 20px) !important;
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
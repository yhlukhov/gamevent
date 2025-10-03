import styled from 'styled-components'
import { Swiper, SwiperSlide } from "swiper/react"
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules'
import { useTranslation } from 'react-i18next'
import { shuffleArray } from '../lib'
//@ts-ignore
import 'swiper/css/effect-coverflow'
//@ts-ignore
import 'swiper/css/navigation'
//@ts-ignore
import 'swiper/css/pagination'
import 'swiper/swiper.css'
import { useEffect, useState } from 'react'
import type { Video } from '../types'
import { getVideos } from '../api'

export default function GamInfoYT() {
  const [links, setLinks] = useState<Video[]|null>(null)
  const { t } = useTranslation()

  useEffect(() => {
    getVideos().then(setLinks)
  }, [])
  
  return (
    <>
      {links && (
        <Article>
          <h4>{t('videos.title')}</h4>
          <Swiper
            effect={'coverflow'}
            slidesPerView={'auto'}
            loop={true}
            navigation={true}
            grabCursor={true}
            autoHeight={true}
            centeredSlides={true}
            pagination={{ dynamicBullets: true, clickable: true }}
            className='swiper'
            coverflowEffect={{
              rotate: 40,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            modules={[EffectCoverflow, Navigation, Pagination]}
          >
            {shuffleArray(links).map((link) => (
              <Slide key={link.title}>
                <div>
                  <iframe
                    width='270'
                    title={link.title}
                    src={`https://www.youtube.com/embed/${link.id}`}
                    referrerPolicy='strict-origin-when-cross-origin'
                    allowFullScreen
                  ></iframe>
                </div>
              </Slide>
            ))}
          </Swiper>
        </Article>
      )}
    </>
  )
}

const Article = styled.article`
  width: 100%;
  margin: 40px auto 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  & .swiper {
    width: 100%;
    margin-top: 15px;
    padding-top: 5px;
    padding-bottom: 20px;
    & .swiper-button-prev,
    .swiper-button-next {
      top: 45%;
      padding: 6px;
      color: #b0925a;
      background-color: #b0925a30;
      border-radius: 50%;
      &:hover {
        background-color: #b0925a50;
      }
    }
    & .swiper-pagination-bullets {
      bottom: 5px;
      & .swiper-pagination-bullet {
        background-color: #b0925a;
      }
    }
  }
`

const Slide = styled(SwiperSlide)`
  width: 270px;
  transition-duration: 200ms;
  & iframe {
    border-radius: 14px;
  }
`
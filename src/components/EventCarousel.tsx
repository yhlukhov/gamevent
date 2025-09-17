import styled from 'styled-components'
import { useNavigate } from 'react-router'
import { useEffect, useState } from 'react'
import { EffectCoverflow } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { shortDateTime } from '../lib'
import { getAllEvents } from '../api'
import type { Event } from '../types'
//@ts-ignore
import 'swiper/css/effect-coverflow'
import 'swiper/swiper.css'

export default function EventCarousel() {
  const [events, setEvents] = useState<Event[]>([])
  const navigate = useNavigate()

  useEffect(() => {
    getAllEvents().then((data) => setEvents(data))
  }, [])

  return (
    <Carousel
      effect={'coverflow'}
      slidesPerView={'auto'}
      grabCursor={true}
      centeredSlides={true}
      coverflowEffect={{
        rotate: 40,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      modules={[EffectCoverflow]}
    >
      {events.map((event) => (
        <Slide key={event.id} onClick={() => navigate(`/event/${event.id}`)}>
          <h2>{event.title}</h2>
          <h4>{event.organizer}</h4>
          <h4>{shortDateTime(event.datetime)}</h4>
          <div className='description'>{event.description}</div>
        </Slide>
      ))}
    </Carousel>
  )
}

const Carousel = styled(Swiper)`
  width: 100%;
`

const Slide = styled(SwiperSlide)`
  width: 270px;
  height: 280px;
  padding: 12px 16px;
  border-radius: 16px;
  background-size: cover;
  background-position: center;
  background-color: #f0efef;
  border: 3px solid #e8e8e8;
  transition-duration: 200ms;
  cursor: pointer;
  &:hover {
    border-color: #d2b37a;
  }

  & .description {
    margin-top: 10px;
    letter-spacing: 1px;
    line-height: 26px;
    color: #2e2e2e;
    max-height: 160px;
    overflow: hidden;
  }
`

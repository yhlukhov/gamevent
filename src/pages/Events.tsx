import styled from 'styled-components'
import { useEffect, useState } from 'react'
import { EventItem } from '../components'
import { getAllEvents } from '../api'
import type { Event } from '../types'

export default function Events() {
  const [events, setEvents] = useState<Event[]>([])

  useEffect(() => {
    getAllEvents().then(setEvents)
  }, [])

  return (
    <EventList>
      <img className='logo' src='/gm-events.png' alt='' />
      <ul>
        {events.map((event) => (
          <EventItem key={event.id} event={event} />
        ))}
      </ul>
    </EventList>
  )
}

const EventList = styled.div`
display: flex;
flex-direction: column;
align-items: center;
& img {
  width: 115px;
  margin-top: 3px;
  margin-bottom: 10px;
}
  & ul {
    margin: 10px 20px 40px;
    display: flex;
    justify-content: center;
    align-items: stretch;
    flex-wrap: wrap;
    gap: 25px 20px;
  }
`

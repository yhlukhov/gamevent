import styled from 'styled-components'
import { useEffect, useState } from 'react'
import { EventItem } from '../components'
import { getAllEvents } from '../api'
import type { Event } from '../types'
import { getCookie } from '../lib'

export default function Events() {
  const [admin, setAdmin] = useState(false)
  const [events, setEvents] = useState<Event[]>([])

  useEffect(() => {
    if (!admin) {
      if (getCookie('admin')) {
        setAdmin(true)
      }
    }
  })

  useEffect(() => {
    getAllEvents(admin).then(setEvents)
  }, [admin])

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
  width: 117px;
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

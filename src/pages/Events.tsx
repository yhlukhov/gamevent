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
    <>
      <EventsList>
        {events.map((event) => (
          <EventItem key={event.id} event={event} />
        ))}
      </EventsList>
    </>
  )
}

const EventsList = styled.ul`
  margin: 10px 20px;
  display: flex;
  justify-content: center;
  align-items: stretch;
  flex-wrap: wrap;
  gap: 10px;
`

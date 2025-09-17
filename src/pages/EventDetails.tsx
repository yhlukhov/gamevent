import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router'
import { displayDateTime, getCookie } from '../lib'
import { getEvent } from '../api/events'
import type { Event } from '../types'
import styled from 'styled-components'

export default function EventDetails() {
  const [event, setEvent] = useState<Event|null>(null)
  const [admin, setAdmin] = useState(false)
  const { id } = useParams()

  useEffect(() => {
    if (id) {
      getEvent(id).then(setEvent)
    }
  }, [id])

  useEffect(() => {
    if (getCookie('admin')) {
      setAdmin(true)
    }
  }, [])

  return event ? (
    <EventDiv>
      <h1 className='title'>{event.title}</h1>
      <h3>{event.organizer}</h3>
      <h3>{displayDateTime(event.datetime)}</h3>
      <div className='description'>{event.description}</div>
      <div
        className='details'
        dangerouslySetInnerHTML={{ __html: event.details }}
      ></div>
      {admin && (
        <Link to={`/event/${event.id}/edit`}>
          <img src='/edit.ico' className='edit' />
        </Link>
      )}
    </EventDiv>
  ) : (
    <h2>Sorry, there is no information about event you are looking for</h2>
  )
}

const EventDiv = styled.div`
  padding: 12px 16px;
  position: relative;
  transition-duration: 200ms;

  & .title {
    margin-bottom: 20px;
  }

  & .description {
    margin-top: 20px;
    letter-spacing: 1px;
    line-height: 26px;
    color: #2e2e2e;
    max-height: 160px;
    overflow: hidden;
  }

  & .details {
    margin-top: 20px;
    margin-bottom: 40px;
    letter-spacing: 1px;
    line-height: 26px;
    color: #2e2e2e;
    overflow: hidden;
    & a {
      color: #b59457;
      text-decoration: underline;
      &:hover {
        color: #caa55f;
      }
    }
    & img {
      width: 100%;
      border-radius: 8px;
    }
  }

  & .edit {
    position: absolute;
    top: 20px;
    right: 5px;
    width: 32px;
    transition-duration: 150ms;
    opacity: 0.4;
    &:hover {
      width: 36px;
      top: 18px;
      right: 3px;
      opacity: 1;
    }
  }
`
import { Link } from 'react-router'
import styled from 'styled-components'
import { useEffect, useState } from 'react'
import { getCookie } from '../lib/cookieManager'
import { displayDateTime } from '../lib/datetime'
import type { Event } from '../types'

export default function EventItem({ event }: { event: Event }) {
  const [admin, setAdmin] = useState(false)

  useEffect(() => {
    if (getCookie('admin')) {
      setAdmin(true)
    }
  }, [])

  return (
    <Li>
      <Link to={`/event/${event.id}`}>
        <h2>{event.title}</h2>
        <h4>{event.organizer}</h4>
        <h4>{displayDateTime(event.datetime)}</h4>
        <div className='description'>{event.description}</div>
      </Link>
      {admin && (
        <Link to={`/event/${event.id}/edit`}>
          <img src='/edit.ico' className='edit' />
        </Link>
      )}
    </Li>
  )
}

const Li = styled.li`
  min-width: 320px;
  max-width: 360px;
  border-radius: 16px;
  padding: 12px 16px;
  background-color: #f0efef;
  border: 3px solid #e8e8e8;
  transition-duration: 200ms;
  cursor: pointer;
  position: relative;
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
  & .edit {
    position: absolute;
    top: -10px;
    right: -5px;
    width: 32px;
    opacity: 0.4;
    transition-duration: 150ms;
    &:hover {
      width: 36px;
      top: -12px;
      right: -7px;
      opacity: 1;
    }
  }
`
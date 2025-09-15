import styled from 'styled-components'
import { Formik, Form, Field } from 'formik'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { getEvent, editEvent, deleteEvent } from '../api/events'
import { dateToLocaleStr, getCookie } from '../lib'
import { QuillEditor } from '../components'
import delSVG from '../assets/delete.svg'
import type { Event } from '../types'

export default function EditEvent() {
  const {id} = useParams()
  const navigate = useNavigate()
  const [event, setEvent] = useState<Event|null>(null)
  const [details, setDetails] = useState('')

  useEffect(() => {
    if (!getCookie('admin')) {
      navigate(-1)
    }
    if (!id) {
      navigate(-1)
    } else {
      getEvent(id).then(event => {
        if (event) {
          setEvent(event)
          setDetails(event.details)
        }
      })
    }
  }, [])

  const onDelete = async () => {
    if (event && confirm(`Are you sure you want delete event: ${event.title}`)) {
      await deleteEvent(event.id)
      navigate('/events')
    }
  }

  return event ? (
    <>
      <h1>Edit event:</h1>
      <h3>{event.title}</h3>
      <Formik
        initialValues={{ ...event, datetime: dateToLocaleStr(event.datetime) }}
        onSubmit={async ({
          id,
          title,
          organizer,
          datetime,
          description,
          elevendays,
        }) => {
          await editEvent(
            {
              title,
              organizer,
              description,
              details,
              datetime: new Date(datetime),
              elevendays,
            },
            id
          )
          alert('Event has been successfully edited!')
          navigate(`/event/${id}`)
        }}
      >
        {({ handleSubmit, isSubmitting }) => (
          <FormikForm onSubmit={handleSubmit}>
            <Field
              name='title'
              placeholder='Event title'
              className='input-box title'
              required
            />

            <Field
              name='organizer'
              placeholder='Organizer'
              className='input-box organizer'
              required
            />

            <Field
              name='datetime'
              type='datetime-local'
              className='input-box datetime'
              step={60}
              required
            />

            <Field
              as='textarea'
              name='description'
              className='input-box description'
              placeholder='Short description'
              maxLength={180}
              required
            />

            <QuillEditor
              text={details}
              setText={setDetails}
              placeholder='Event details, including Zoom link, or other instruction to join'
            />

            <div className='elevendays'>
              <Field type='checkbox' name='elevendays' />
              <label>Only for 11-days participants?</label>
            </div>

            <div className='controls'>
              <button type='button' onClick={()=>navigate(-1)}>Cancel</button>
              <button type='submit' disabled={isSubmitting}>
                Edit event
              </button>
            </div>
          </FormikForm>
        )}
      </Formik>
      <DeleteBtn src={delSVG} width={35} onClick={onDelete} />
    </>
  ) : (
    <h3>Loading...</h3>
  )
}

const FormikForm = styled(Form)`
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-radius: 16px;
  padding: 12px 16px;
  background-color: #f0efef;
  border: 3px solid #e8e8e8;
  transition-duration: 200ms;

  & .input-box {
    margin-top: 10px;
    padding: 5px 8px;
    letter-spacing: 1px;
    line-height: 26px;
    color: #2e2e2e;
    border-radius: 12px;
    border: 2px solid #d2b37a;
    background-color: #fafafa;

    &:hover {
      border-color: #ead1a5;
    }
  }

  & .title {
    margin-bottom: 5px;
    font-family: Lato, sans-serif;
    font-size: x-large;
    letter-spacing: 3px;
    text-transform: uppercase;
    white-space: nowrap;
    overflow: hidden;
    color: #b0925a;
    &::placeholder {
      color: #b1a28587;
    }
  }

  & .description {
    font-size: 16px;
    font-family: Roboto, sans-serif;
    field-sizing: content;
    resize: none;
    height: 55px;
    overflow: hidden;
  }

  & .organizer,
  .datetime {
    font-family: Lato, sans-serif;
    font-size: 18px;
    letter-spacing: 2px;
    line-height: 24px;
    color: #b0925a;
    &::placeholder {
      color: #b1a28587;
    }
  }

  & .datetime::-webkit-calendar-picker-indicator {
    width: 20px;
    height: 20px;
    padding-top: 4px;
    padding-right: 2px;
    border-radius: 4px;
    background-color: #fff6e7;
    box-shadow: 2px 2px 3px #c1b49e;
    border: 1px solid #cfba93;
    cursor: pointer;
  }

  & .elevendays {
    display: flex;
    align-items: center;
    gap: 5px;
    & label {
      padding-top: 2px;
      font-size: 15px;
      color: #333333;
    }
    & input {
      width: 15px;
      transform: scale(1.1);
    }
  }

  & .controls {
    display: flex;
    justify-content: center;
    gap: 20px;
    & button {
      height: 37px;
      width: fit-content;
      padding: 5px 12px;
      font-size: large;
      border: 2px solid #b0925a;
      border-radius: 12px;
      &:hover {
        cursor: pointer;
        background-color: #eaeaea;
      }
    }
    & button[type='submit'] {
      background-color: #e3d6c1;
      &:hover {
        background-color: #ebe3d7;
      }
    }
  }
`

const DeleteBtn = styled.img`
  margin-top: 10px;
  margin-bottom: 40px;
  cursor: pointer;
  transition-duration: 150ms;
  &:hover {
    transform: scale(1.06);
  }
`
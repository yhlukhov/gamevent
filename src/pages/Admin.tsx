import styled from "styled-components"
import {useNavigate} from 'react-router'
import { useState, useEffect } from "react"
import { Formik, Form, Field } from "formik"
import {getCookie, setCookie} from '../lib'

export default function Admin() {
  const [admin, setAdmin] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    if (getCookie('admin')) {
      setAdmin(true)
    }
  }, [])

  return admin ? (
    <>
      <h1>You are already logged in</h1>
      <h3>Reload site for new experiance</h3>
    </>
  ) : (
    <>
      <h1>Login as admin:</h1>
      <Formik
        initialValues={{ password: '' }}
        onSubmit={({ password }) => {
          if (password === import.meta.env.VITE_ADMIN_PW) {
            setCookie('admin', 'true', 7)
            setAdmin(true)
          } else {
            navigate('/')
          }
        }}
      >
        <LoginForm>
          <Field
            type='password'
            name='password'
            className='input-box'
            placeholder='Enter password'
          />
          <button type='submit'>Submit</button>
        </LoginForm>
      </Formik>
    </>
  )
}

const LoginForm = styled(Form)`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
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

  & button[type='submit'] {
    height: 37px;
    width: fit-content;
    padding: 5px 12px;
    font-size: large;
    border-radius: 12px;
    border: 2px solid #b0925a;
    background-color: #e3d6c1;
    &:hover {
      cursor: pointer;
      background-color: #ebe3d7;
    }
  }
`
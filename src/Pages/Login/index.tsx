import React, { useState } from 'react'
import api from '../../utils/api'
import { setItem } from '../../utils/auth'
import { Button } from "../../components/Button"
import { Input } from "../../components/Input"
import { Container } from "./styles"
import { Link, useNavigate } from 'react-router-dom'

export const Login = () => {
  const navigate = useNavigate()

  type formProps = {
    username?: string,
    password?: string
  }

  const [user, setUsers] = useState<formProps>()

  const onSubmitForm = async () => {
    const response = await api.post('/login', user)
    if (response.data.error) {
      alert('Usuario ou senha incorreta')
      return
    }
    setItem('TOKEN_KEY', response.data?.token)
    setItem('CLIENT', response.data?.user.username)
    navigate('/app')
  }

  return (
    <Container>
      <div>
        <h2> Welcome </h2>
        <hr />
        <form onSubmit={(event) => event.preventDefault()}>

          <label htmlFor="username">Username</label>
          <Input
            id="username"
            type="text"
            placeholder="Enter your username"
            onChange={(event) => setUsers({ ...user, username: event.target.value })}
          />

          <label htmlFor="password">Password</label>
          <Input
            id="password"
            type="password"
            placeholder="Enter your password"
            onChange={(event) => setUsers({ ...user, password: event.target.value })}
          />

          <Button
            type="submit"
            color='#254E70'
            onClick={onSubmitForm}
          >
            Login
          </Button>

        </form>

        <Link to="#"> Sign-up </Link>
      </div>
    </Container>
  )
}
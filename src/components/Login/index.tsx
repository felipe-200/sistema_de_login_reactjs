import React, { useState } from 'react'
import api from '../../utils/api'
import { setToken } from '../../utils/auth'
import { Button } from "../Button"
import { Input } from "../Input"
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
    alert('Logado com sucesso !')
    setToken(response.data?.token)
    navigate('/app')
  }

  return (
    <Container>
      <div>
        <h2> Sign-In </h2>
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
import { useState } from 'react'
import { DropdownContainer, DropdownContent } from './styles'
import { exit } from '../../utils/auth'
import { getItem } from '../../utils/auth'
import { useNavigate } from 'react-router-dom'

export const Dropdown = () => {
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const username = getItem('CLIENT')

  const client = () => {
    const client = username.split('')
    return {
      initialUser: client[0].toUpperCase()
    }
  }

  const loggout = () => {
    exit()
    navigate('/')
  }

  return (
    <DropdownContainer>
      <strong onClick={() => setIsOpen(!isOpen)}> {client().initialUser}  </strong>
      {isOpen ? (
        <DropdownContent>
          <span> {username} </span>
          <span onClick={loggout} > Exit </span>
        </DropdownContent>
      ) : false}
    </DropdownContainer>
  )
}
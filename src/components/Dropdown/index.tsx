import { useState } from 'react'
import { DropdownContainer, DropdownContent } from './styles'
import { ArrowUp } from '../Icons/ArrowUp'
import { ArrowDown } from '../Icons/ArrowDown'
import { exit } from '../../utils/auth'
import { useNavigate } from 'react-router-dom'

interface DropdownProps {
  username?: string
}

export const Dropdown = ({ username }: DropdownProps) => {
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const loggout = () => {
    exit()
    navigate('/')
  }

  return (
    <DropdownContainer>
      <span onClick={() => setIsOpen(!isOpen)}> {username || 'Profile'} <span> {isOpen ? ArrowUp : ArrowDown} </span>  </span>
      {isOpen ? (
        <DropdownContent>
          <span> Edit Profile </span>
          <span onClick={loggout} > Exit </span>
        </DropdownContent>
      ) : false}
    </DropdownContainer>
  )
}
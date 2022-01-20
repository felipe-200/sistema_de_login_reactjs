import React, { useEffect, useState } from "react"
import { Table, Header } from "../../components/Table"
import api from "../../utils/api"

export const ListClients = () => {
  interface clientsProps {
    _id: string,
    username: string,
  }

  const [clients, setClients] = useState<[clientsProps]>()

  useEffect(() => {
    const getAllClients = async () => {
      const response = await api.get('/clients')
      setClients(response.data.data)
    }
    getAllClients()
  }, [])

  return (
    <>
      <h3> List Clients </h3>
      <Table>
        <Header>
          <tr>
            <th> ID </th>
            <th> Username </th>
          </tr>
        </Header>
        <tbody>
          {clients?.map((user) => (
            <tr key={user._id}>
              <td> {user._id} </td>
              <td> {user.username} </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  )
}

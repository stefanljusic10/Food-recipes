import React, { useState } from 'react'
import { Dropdown } from '../styles/Header.styled'
import { Button } from '../styles/Button.styled'

function LogDropdown({ findUser }) {
  const [user, setUser] = useState({ email: '', password: '' })

  return (
    <Dropdown>
      <form onSubmit={(e) => findUser(e, user)}>
        <input
          id="email"
          type="email"
          placeholder="email"
          onChange={(e) => setUser({ ...user, [e.target.id]: e.target.value })}
        />
        <input
          id="password"
          type="password"
          placeholder="password"
          onChange={(e) => setUser({ ...user, [e.target.id]: e.target.value })}
        />
        <Button marginTop="0">Log in</Button>
      </form>
    </Dropdown>
  )
}

export default LogDropdown

import React, { useState } from 'react'
//import { Card, Button, Alert } from 'react-bootstrap'
import { useAuth } from '../../context/usercontext'
import { Link, useNavigate } from 'react-router-dom'

export default function Dashboard() {

    const [error, setError] = useState("")
    const { currentUser, logout } = useAuth()
    const nav = useNavigate()

    async function handleLogout() {
        setError('')
        try {
            await logout()
            nav('/login')

        } catch {
            setError('Failed to log out')

        }
    }
    return (
      <>
       
              <form>
                  <h2 className="text-center mb-4">Profile</h2>
                  {error && <Alert variant="danger">{error}</Alert>}
                  <strong>
                      Email:
                  </strong> {currentUser.email}
                  <Link to="/update-profile" className="btn btn-primary w-100 mt-3">Update profile</Link>

              </form>

          
          <div className="w-100 text-center mt-2">
              <Button variant="link" onClick={handleLogout}>
                  Log Out
              </Button>
          </div>

      </>
  )
}
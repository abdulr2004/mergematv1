import { useState } from 'react'
import './App.css'
import './index.css'
import {Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Landing from './pages/landing'
import Login from '../src/pages/login'
import Register from './pages/register'
import axios from 'axios'
import {Toaster} from 'react-hot-toast'
import { AuthProvider } from './appcontext/Authcontext';
import Dashboard from './pages/Dashboard'
import { Auth } from './components/Auth'
import ForgotPassword from './pages/ForgotPassword'

//axios.defaults.baseURL= 'http://localhost:3000';
//axios.defaults.withCredentials= true;

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <AuthProvider>
      <Toaster position='bottom-right' toastOptions={{duration:2000}} />
      <Navbar />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/forgotpassword' element={<ForgotPassword/>} />
      </Routes>
    </AuthProvider>
  )
}

export default App;

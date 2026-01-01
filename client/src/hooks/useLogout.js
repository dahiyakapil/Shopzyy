import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logout as logoutAction } from '../store/slice/auth.slice'

export default function useLogout() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  // read minimal state from the slice as requested
  const isAuthenticated = useSelector((state) => state.auth?.isAuthenticated)
  const admin = useSelector((state) => state.auth?.admin)

  const logout = useCallback(() => {
    // simple client-side logout
    try {
      dispatch(logoutAction())
    } catch (e) {
      console.warn('Dispatch logout failed', e)
    }
    try {
      localStorage.removeItem('token')
      localStorage.removeItem('refreshToken')
    } catch (e) {
      console.warn('Clearing localStorage failed', e)
    }
    navigate('/admin/login')
  }, [dispatch, navigate])

  return { logout, isAuthenticated, admin }
}


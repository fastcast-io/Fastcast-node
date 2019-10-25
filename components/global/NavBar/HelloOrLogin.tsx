import { useState, useEffect } from 'react'
import { useAuth } from '../../firebase'
import { Button, Nav } from 'react-bootstrap'

// TODO: FIX GOOGLE BUTTON SIGN-IN

const NotLoggedIn = (handleLogin: CallableFunction) => (
    <Button onClick={() => handleLogin()}>
        Google Login
    </Button>
)

const LoggedIn = ( userEmail: string ) => (
    <Nav.Link style={{ color: 'black' }}>Hi <strong><i>{userEmail}</i></strong>    |</Nav.Link>
)

const LogOut = ( handleLogout: CallableFunction ) => (
    <Nav.Link onClick={() => handleLogout()} style={{ color: '#17A2B8' }}>Logout</Nav.Link>
)

const HelloOrLogin = ({ styles } : any) => {
    const authStatus = useAuth()
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [userEmail, setUserEmail] = useState("")

    const initiateLogin = () => {
        if (!authStatus.isLoggedIn) {
            authStatus.firebase.login()
        }
    }

    const initiateLogout = () => {
        if (authStatus.isLoggedIn) {
            authStatus.firebase.logout()
        }
    }

    useEffect(() => {
        setIsLoggedIn(authStatus.isLoggedIn as boolean)
        setUserEmail(authStatus.firebase.getUserName()['email'] as any)
    }, [authStatus.isLoggedIn])

    return (
        <div style={styles}>
            {isLoggedIn ? <Nav.Item style={{ display: 'flex', flexDirection: 'row' }}>{LoggedIn(userEmail as string)}{ LogOut(initiateLogout) }</Nav.Item> : NotLoggedIn(initiateLogin)}
        </div>
    )
}

export default HelloOrLogin
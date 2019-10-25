import { useState, useEffect } from 'react'
import { useAuth } from '../../firebase'
import { Button } from 'react-bootstrap'

// TODO: FIX GOOGLE BUTTON SIGN-IN

const NotLoggedIn = (handleLogin: CallableFunction) => (
    <Button onClick={() => handleLogin()}>
        Google Login
    </Button>
)

const LoggedIn = ( userEmail: string ) => (
    <div>Hi {userEmail} </div>
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

    useEffect(() => {
        setIsLoggedIn(authStatus.isLoggedIn as boolean)
        setUserEmail(authStatus.firebase.getUserName()['email'] as any)
    }, [authStatus.isLoggedIn])

    return (
        <div style={styles}>
            {isLoggedIn ? LoggedIn(userEmail as string) : NotLoggedIn(initiateLogin)}
        </div>
    )
}

export default HelloOrLogin
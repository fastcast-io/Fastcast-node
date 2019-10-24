import { useState, useEffect } from 'react'
import { useAuth } from '../../firebase'

// TODO: FIX GOOGLE BUTTON SIGN-IN

const NotLoggedIn = (handleLogin: CallableFunction) => (
    <button className="button is-primary" onClick={() => handleLogin()}>
            <strong>Google Login</strong>
    </button>
)

const LoggedIn = ( userEmail: string ) => (
    <div>Hi {userEmail} </div>
)

const HelloOrLogin = ({}) => {
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
        <div>
            {isLoggedIn ? LoggedIn(userEmail as string) : NotLoggedIn(initiateLogin)}
        </div>
    )
}

export default HelloOrLogin
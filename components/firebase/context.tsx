import React, { useState, ProviderProps, Provider } from 'react'
import { Firebase } from './firebase'
import { User } from 'firebase'

interface IAuthProvided {
    user: User | null,
    isLoggedIn: Boolean,
    firebase:  Firebase
}

// type IAuthProviderProps =  //& PropsWithChildren<Object> & withFirebaseProps 

const FirebaseContext = React.createContext< React.ContextType<any> | null >(null);

export const FirebaseProvider = FirebaseContext.Provider;
export const FirebaseConsumer = FirebaseContext.Consumer;

// let test: IAuthProviderProps = {
    
// }

function AuthProvider({children, value }:ProviderProps<Object>) {
    const [isLoggedIn, setIsLoggedIn ] = useState(false)
    const [currentUser, setCurrentUser ] = useState<User | null>(null)
    
    let defaultFirebase : Firebase | undefined | null = (value as Firebase | undefined | null)

    if (defaultFirebase === undefined || defaultFirebase === null) {
        defaultFirebase = new Firebase
    }
    
    defaultFirebase.auth.onAuthStateChanged(async (user) => {
        setCurrentUser(user)
        setIsLoggedIn(!!user)
    })
    
    return (
        <FirebaseProvider
            value= {{
                user: currentUser,
                isLoggedIn: isLoggedIn,
                firebase: defaultFirebase
            }}
        >
            {children}
        </FirebaseProvider>
    )
}
{/* // export const withFirebase = <P extends object>(Component: React.ComponentType<P>) */}
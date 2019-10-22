import React from 'react'

// interface withFirebaseProps {
//     state: 
// }

const FirebaseContext = React.createContext(null);

export const FirebaseProvider = FirebaseContext.Provider;
export const FirebaseConsumer = FirebaseContext.Consumer;


// export const withFirebase = <P extends object>(Component: React.ComponentType<P>)
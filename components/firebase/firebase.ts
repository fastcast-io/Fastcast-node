import * as firebase from 'firebase'

import 'firebase/auth'
// import 'firebase/firestore'
import { firebaseConfig } from '../../constants/firebaseConfig'

var app : firebase.app.App = firebase.initializeApp(firebaseConfig)

class Firebase {
    auth: firebase.auth.Auth
    provider: firebase.auth.AuthProvider

    constructor() {
        
        this.auth = app.auth()
        this.provider = new firebase.auth.GoogleAuthProvider()

    }


}
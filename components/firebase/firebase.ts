import * as firebase from 'firebase'

import 'firebase/auth'
// import 'firebase/firestore'
import { firebaseConfig } from '../../constants/firebaseConfig'

var app : firebase.app.App = firebase.initializeApp(firebaseConfig)

class Firebase {
    auth: firebase.auth.Auth
    provider: firebase.auth.GoogleAuthProvider

    constructor() {
        
        this.auth = app.auth()
        this.provider = new firebase.auth.GoogleAuthProvider()

        /**
         * Adding scopes
         * as found here:
         * https://developers.google.com/identity/protocols/googlescopes#scriptv1
         */
        this.provider.addScope('https://www.googleapis.com/auth/userinfo.email')
        this.provider.addScope('https://www.googleapis.com/auth/userinfo.profile')
        // this.provider.addScope('https://www.googleapis.com/auth/gmail.send')
        // this.provider.addScope('https://www.googleapis.com/auth/drive')
        // this.provider.addScope('https://www.googleapis.com/auth/forms')
        // this.provider.addScope('https://www.googleapis.com/auth/spreadsheets')

        /**
         * Custom google auth options
         */
        this.provider.setCustomParameters({
            'prompt': 'select_account'
        })
    }


}
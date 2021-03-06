import * as firebase from 'firebase'
import 'firebase/auth'
// import 'firebase/firestore'
import { firebaseConfig } from '../../constants/firebaseConfig'

var app : firebase.app.App = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()

// console.log({ firebaseConfig })
export interface IFastCastUserInfo {
    email: string | null,
    displayName: string | null,
    photoURL: string | null,
    uid: string
}

interface IFastCastUserInfoAll {
    (): IFastCastUserInfo
}

// type IFastCastUserInfoAll = IFastCastUserInfo | (() => IFastCastUserInfo)
type IBool = Boolean | (() => Boolean)
type IVoidAll = void | (() => void)

export class Firebase {
    auth: firebase.auth.Auth
    provider: firebase.auth.GoogleAuthProvider
    // session?: {
    //     token:  string | undefined
    //     user: firebase.User | null
    // }

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

    /**
     * Auth functions
     * - Login
     * - Logout
     * - isUserLoggedIn
     */
    login = () => {
        this.auth.signInWithRedirect(this.provider)
        
        this.auth.getRedirectResult().then(function(result) {
            let credential: firebase.auth.OAuthCredential = (<firebase.auth.OAuthCredential>result.credential);
            // var token: string | undefined = credential.accessToken;
            // var user: firebase.User | null = result.user;

            // return { token, user }
            // console.log({token})
            // console.log({user})
        })
        // .then(result => { 
        //     if (result.token !== undefined && result.user !== null) {
        //         this.session = result
        //     } 
            
        //     console.log(`Successfully logged in ${this.session}`)
        // }, function(error) {
        //     console.log(`Could not login. Error ${error}`)
        //     return error
        // })
        // this.auth.signInWithPopup(this.provider).then(function(result) {
        //     let credential: firebase.auth.OAuthCredential = (<firebase.auth.OAuthCredential>result.credential);
        //     var token: string | undefined= credential.accessToken;
        //     var user: firebase.User | null = result.user;

        //     return { token, user }
        // }).then(result => { 
        //     if (result.token !== undefined && result.user !== null) {
        //         this.session = result
        //     } 
        // })
    }

    logout = () => this.auth.signOut()

    isUserLoggedIn: IBool = () => {
        // if (this.session) {
        if (this.auth.currentUser !== null) {
            return true
        } 
        // }
        return false
    }

    /**
     * Profile functions
     * - getUserInfo
     */
    // TODO: Update getUserName to getUserInfo
    getUserInfo: IFastCastUserInfoAll = () => {
        if (this.auth.currentUser) {
            const { email, displayName, uid, photoURL } = this.auth.currentUser;
                return { email, displayName, uid, photoURL };
        }
        return { email: null, displayName: null, uid: "", photoURL: null };
    }
}
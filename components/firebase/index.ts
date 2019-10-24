import { Firebase } from './firebase'
import { AuthProvider, useAuth, IAuthProvided } from './context'

export interface IAuthStatus extends IAuthProvided {}

export { Firebase, AuthProvider, useAuth }
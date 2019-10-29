import { Firebase, IFastCastUserInfo } from './firebase'
import { AuthProvider, useAuth, IAuthProvided } from './context'

export interface IAuthStatus extends IAuthProvided {}
export interface IUserInfo extends IFastCastUserInfo {}

export { Firebase, AuthProvider, useAuth }
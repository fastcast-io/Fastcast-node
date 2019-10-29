import { IImgSizing } from '../../global/FastcastGlobalTypes'

const SessionsActionIcon = ({ styles }: IImgSizing) => {
    return (
        <div>
            <img alt="sessions-icon" src={'/sessions.png'} style={styles} />
        </div>
    )
}

export default SessionsActionIcon
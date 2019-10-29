import { IImgSizing } from '../../global/FastcastGlobalTypes'

const CirclesActionIcon = ({ styles }: IImgSizing) => {
    return (
        <div>
            <img alt="circles-icon" src={'/circlesIcon.svg'} style={styles} />
        </div>
    )
}

export default CirclesActionIcon
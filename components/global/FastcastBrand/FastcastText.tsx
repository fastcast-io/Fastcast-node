import { IImgSizing } from '../FastcastGlobalTypes'

const FastcastText = ({ styles }: IImgSizing ) => (
    <div className="fastcast-brand">
            <img alt="fastcast-brand" src={'/FastcastText.svg'} style={styles} />
    </div>
)

export default FastcastText
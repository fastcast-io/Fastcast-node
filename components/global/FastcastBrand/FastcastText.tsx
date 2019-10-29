import { IImgSizing } from '../FastcastGlobalTypes'

const FastcastText = ({ styles }: IImgSizing ) => (
    <div className="fastcast-brand">
            <img alt="fastcast-brand" src={'/FastcastText.svg'} style={styles} />
    </div>
)
// TODO: Fix messed up classname text styles
export default FastcastText
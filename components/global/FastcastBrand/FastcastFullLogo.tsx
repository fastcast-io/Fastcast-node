import { IImgSizing } from '../FastcastGlobalTypes'

const FastcastFullLogo = ({ styles }: IImgSizing) => (
    <div className="fastcast-brand">
            <img alt="fastcast-brand" src={'/FastcastFullLogo.svg'} style={styles}/>
    </div>
)

export default FastcastFullLogo
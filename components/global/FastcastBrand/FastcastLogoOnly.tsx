import { IImgSizing } from '../FastcastGlobalTypes'
// TODO: Fix the duplicate interface for imgSizing !!!!

const FastcastLogoOnly = ({ styles }: IImgSizing) => (
    <div className="fastcast-brand">
            <img alt="fastcast-brand" src={'/FastcastLogoOnly.svg'} style={styles} />
    </div>
)

export default FastcastLogoOnly
import { IImgSizing } from '../../global/FastcastGlobalTypes'

const TemplatesActionIcon = ({ styles }: IImgSizing) => {
    return (
        <div>
            <img alt="templates-icon" src={'/templates.png'} style={styles} />
        </div>
    )
}

export default TemplatesActionIcon
import { IImgSizing } from '../../global/FastcastGlobalTypes'

const CreateActionIcon = ({ styles }: IImgSizing) => {
    return (
        <div>
            <img alt="create-icon" src={'/create.png'} style={styles} />
        </div>
    )
}

export default CreateActionIcon
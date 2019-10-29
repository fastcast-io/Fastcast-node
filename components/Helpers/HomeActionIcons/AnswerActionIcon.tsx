import { IImgSizing } from '../../global/FastcastGlobalTypes'

const AnswerActionIcon = ({ styles }: IImgSizing) => {
    return (
        <div>
            <img alt="answer-icon" src={'/answer.png'} style={styles} />
        </div>
    )
}

export default AnswerActionIcon
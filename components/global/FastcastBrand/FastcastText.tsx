interface imgSizing {
    styles : {
        height: string,
        width: string
    }
}

const FastcastText = ({ styles }: imgSizing ) => (
    <div className="fastcast-brand">
            <img alt="fastcast-brand" src={'/FastcastText.svg'} style={styles} />
    </div>
)

export default FastcastText
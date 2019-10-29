interface imgSizing {
    styles : {
        height: string,
        width: string
    }
}
// TODO FIX DUPLICATE IMGSIZING!!

const FastcastFullLogo = ({ styles }: imgSizing) => (
    <div className="fastcast-brand">
            <img alt="fastcast-brand" src={'/FastcastFullLogo.svg'} style={styles}/>
    </div>
)

export default FastcastFullLogo
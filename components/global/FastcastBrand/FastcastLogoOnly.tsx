interface imgSizing {
    styles: {
        height: string,
        width: string
    }
}

// TODO: Fix the duplicate interface for imgSizing !!!!

const FastcastLogoOnly = ({ styles }: imgSizing) => (
    <div className="fastcast-brand">
            <img alt="fastcast-brand" src={'/FastcastLogoOnly.svg'} style={styles} />
    </div>
)

export default FastcastLogoOnly
import ActionCardText from './ActionCardText'

interface IActionCardProp {
    ImageComponent: any,
    styles: {
        width: string,
        height: string
    },
    textValue: string,
    format: "big" | "normal"
}

const ActionCard = ({ ImageComponent, styles, textValue, format } : IActionCardProp) => {
    return (
        <>
            <div className="action-card">
                <ImageComponent styles={styles} />
                <ActionCardText textValue={textValue} format={format} />
                {/* <div>
                    <div className="indicator">TEST</div>
                </div> */}
            </div>
            <style jsx>{`
                .action-card {
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    align-items: center;
                    cursor: pointer;
                    background: #FFFFFF;
                    box-shadow: 0.5px 0.5px 4px rgba(0, 0, 0, 0.25);
                    width: 450px;
                    height: 250px;
                    margin-right: 60px;
                }

                .action-card:hover {
                    /* border-bottom: 3px solid #C30000; */
                    /* background: #F9F6EF; */
                    /* cursor: loading; */
                }

                /* .indicator {
                    background: #F9F6EF;
                    width: 3px;
                    min-width: 3px;
                    max-width: 3px;
                } */
            `}</style>
        </>
    )
}

export default ActionCard
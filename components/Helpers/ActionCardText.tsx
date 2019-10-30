interface IActionCardProp {
    textValue: string,
    format: string
}

const ActionCardText = ({ textValue, format } : IActionCardProp) => {

    return (
        <div>
            <span className={`action-card-${format}`}> 
                {textValue}
            </span>
            <style jsx>{`
                .action-card-big {
                    font-style: italic;
                    font-weight: normal;
                    font-size: 64px;
                    line-height: 83px;
                    color: #C30000;
                }

                /* TODO: IMPORT FROM ONE AND CUSTOMIZE */
                .action-card-normal {
                    font-style: italic;
                    font-weight: normal;
                    font-size: 48px;
                    line-height: 62px;
                    color: #C30000;
                }
            `}</style>
        </div>
    )
}

export default ActionCardText
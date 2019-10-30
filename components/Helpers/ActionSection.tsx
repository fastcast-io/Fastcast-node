import { ActionTitle, AnswerActionIcon, ActionCard, CreateActionIcon } from './'
import { IActionSectionProp } from '../global/FastcastGlobalTypes'

const ActionSection = ({ SectionTitle, ActionCards } : IActionSectionProp ) => {

    return (
        <div style={{
            display: "flex",
            flexDirection: "column"
        }}>
            <ActionTitle textValue={SectionTitle} />
            <div className="quick-actions">
                {ActionCards.map((actionObject) => (
                    <ActionCard 
                        ImageComponent={actionObject.IconComponent}
                        styles={actionObject.Styles}
                        format={actionObject.Format as ("big" | "normal")}
                        textValue={actionObject.TextValue}
                        key={`${actionObject.TextValue}`}
                    />    
                ))}
            </div>
            <style jsx>{`
                .quick-actions {
                    display: flex;
                    flex-direction: row;
                    /* padding: 8px; */
                }
                `}</style>
        </div>
    )
}

export default ActionSection
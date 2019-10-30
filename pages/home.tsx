import { Container } from 'react-bootstrap'
import { ActionTitle, AnswerActionIcon, ActionCard, CreateActionIcon, SessionsActionIcon, CirclesActionIcon, TemplatesActionIcon } from '../components/Helpers'
import ActionSection from '../components/Helpers/ActionSection'
import { IActionCardProp } from '../components/global/FastcastGlobalTypes'
// TODO: CREATE A REDIRECT COMPONENT WHICH WRAPS EVERYTHING OR LOADS! AND HAS BACKGROUND


const Home = (props: React.ComponentProps<any>) => {
    
    const styles = {
        height: '10rem',
        width: '10rem'
    }
    
    const QuickActions = [
        {
            IconComponent: AnswerActionIcon,
            Styles: styles,
            Format : "big",
            TextValue: "Answer"
        },
        {
            IconComponent: CreateActionIcon,
            Styles: styles,
            Format: "big",
            TextValue: "Create"
        },
    ]

    const Sessions = [
        {
            IconComponent: SessionsActionIcon,
            Styles: styles,
            Format: "normal",
            TextValue: "Manage Sessions"
        }
    ]

    const MyCircles = [
        {
            IconComponent: CirclesActionIcon,
            Styles: styles,
            Format: "normal",
            TextValue: "Manage Circles"
        }
    ]

    const MyTemplates = [
        {
            IconComponent: TemplatesActionIcon,
            Styles: styles,
            Format: "normal",
            TextValue: "Manage Templates"
        }
    ]

    return (
    <Container>
        <ActionSection SectionTitle={"Quick Actions"} ActionCards={QuickActions as unknown as IActionCardProp[]} />
        <ActionSection SectionTitle={"Sessions"} ActionCards={Sessions as unknown as IActionCardProp[]} />
        <ActionSection SectionTitle={"My Circles"} ActionCards={MyCircles as unknown as IActionCardProp[]} />
        <ActionSection SectionTitle={"My Templates"} ActionCards={MyTemplates as unknown as IActionCardProp[]} />
        
    </Container>
)}

export default Home
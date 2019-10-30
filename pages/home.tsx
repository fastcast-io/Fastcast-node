import { Container } from 'react-bootstrap'
import { AnswerActionIcon, CreateActionIcon, SessionsActionIcon, CirclesActionIcon, TemplatesActionIcon } from '../components/Helpers'
import ActionSection from '../components/Helpers/ActionSection'
import { IActionCardProp } from '../components/global/FastcastGlobalTypes'
import { useRouter } from 'next/router'
// TODO: CREATE A REDIRECT COMPONENT WHICH WRAPS EVERYTHING OR LOADS! AND HAS BACKGROUND


const Home = (props: React.ComponentProps<any>) => {
    // TODO: Fix the layout. And it looks kinda ugly lol
    const styles = {
        height: '7rem',
        width: '7rem'
    }

    const router = useRouter()

    const handleActionClick = (linkTo: string) => {
        router.push(linkTo)
    }
    
    const QuickActions = [
        {
            IconComponent: AnswerActionIcon,
            Styles: styles,
            Format : "big",
            TextValue: "Answer",
            linkTo: "/answer"
        },
        {
            IconComponent: CreateActionIcon,
            Styles: styles,
            Format: "big",
            TextValue: "Create",
            linkTo: "/create"
        },
    ]

    const Sessions = [
        {
            IconComponent: SessionsActionIcon,
            Styles: styles,
            Format: "normal",
            TextValue: "Manage Sessions",
            linkTo: "/sessions"
        }
    ]

    const MyCircles = [
        {
            IconComponent: CirclesActionIcon,
            Styles: styles,
            Format: "normal",
            TextValue: "Manage Circles",
            linkTo: "/circles"
        }
    ]

    const MyTemplates = [
        {
            IconComponent: TemplatesActionIcon,
            Styles: styles,
            Format: "normal",
            TextValue: "Manage Templates",
            linkTo: "/templates"
        }
    ]

    return (
    <Container>
        <ActionSection SectionTitle={"Quick Actions"} ActionCards={QuickActions as unknown as IActionCardProp[]} handleClick={handleActionClick} />
        <div className="other-sections">
            <ActionSection SectionTitle={"Sessions"} ActionCards={Sessions as unknown as IActionCardProp[]} handleClick={handleActionClick} />
            <ActionSection SectionTitle={"My Circles"} ActionCards={MyCircles as unknown as IActionCardProp[]} handleClick={handleActionClick} />
            <ActionSection SectionTitle={"My Templates"} ActionCards={MyTemplates as unknown as IActionCardProp[]} handleClick={handleActionClick} />
        </div>
        <style jsx>{`
            .other-sections {
                display: flex;
                /* flex-direction: row; */
                flex-flow: row wrap; 
                margin-top: 8px;
                margin-bottom: 26px;
            }
        `}</style>
    </Container>
)}

export default Home
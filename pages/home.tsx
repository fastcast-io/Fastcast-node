import { Container } from 'react-bootstrap'
import { ActionTitle, AnswerActionIcon } from '../components/Helpers'

// TODO: CREATE A REDIRECT COMPONENT WHICH WRAPS EVERYTHING OR LOADS! AND HAS BACKGROUND
const Home = (props: React.ComponentProps<any>) => (
    <Container>
        <div>
            <ActionTitle textValue={"Quick Actions"}/>
            <AnswerActionIcon styles={{ height: '20rem', width: '20rem' }}/>
        </div>
    </Container>
)

export default Home
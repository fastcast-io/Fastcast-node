import { Container } from 'react-bootstrap'
import { ActionTitle } from '../components/Helpers'

// TODO: CREATE A REDIRECT COMPONENT WHICH WRAPS EVERYTHING OR LOADS! AND HAS BACKGROUND
const Home = (props: React.ComponentProps<any>) => (
    <Container>
        <div>
            <ActionTitle textValue={"Quick Actions"}/>
        </div>
    </Container>
)

export default Home
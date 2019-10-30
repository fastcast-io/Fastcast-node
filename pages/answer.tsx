import { useState, ChangeEvent } from 'react' 
import { Container, Button, InputGroup, FormControl, Form } from 'react-bootstrap'
import { ActionTitle } from '../components/Helpers'

const Answer = ({}) => {
    const [ formCode, setFormCode ] = useState<string | null>("")

    const handleChange = (e : any) => {
        setFormCode(e.target.value)
        console.log(`Your code is ${e.target.nodeValue}`)
    }

    const handleSubmit = (e:any) => {
        e.preventDefault()

        alert(formCode)

    }
    

    return (
        <Container>
            <ActionTitle textValue="Answer" />
            <div className="answer-box">
                <h1 style={{padding: '10px'}}>Enter Code</h1>

                {/* <form onSubmit={handleSubmit}>
                    <label>
                        <h1 style={{padding: '10px'}}>Enter Code</h1>
                        <input type="text" value={formCode as any} onChange={handleChange} />
                    </label>
                    <Button type="submit" value="Continue" />
                </form> */}
                <Form onSubmit={handleSubmit}>
                    <InputGroup className="mb-3">
                        <FormControl
                            placeholder="Form's code"
                            aria-label="Enter form's code"
                            aria-describedby="form-code"
                            onChange={handleChange}
                        />
                        <InputGroup.Append>
                        <Button variant="outline-primary" type="submit">Continue</Button>
                        </InputGroup.Append>
                    </InputGroup>

                </Form>


            </div>
            <style jsx>{`
                .answer-box {
                    display: flex;
                    flex-direction: column;
                    padding: 25px;
                    align-items: center;
                    align-content: center;
                    width: 100%;
                    margin: 25px;
                }
            `}</style>
        </Container>
    )
}

export default Answer
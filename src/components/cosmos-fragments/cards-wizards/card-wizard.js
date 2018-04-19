import React from 'react'
//import PropTypes from 'prop-types'
import { Form , Segment, TextArea } from 'semantic-ui-react'

class CardWizard extends React.Component {
    render() {
        return (
            <Segment.Group horizontal style={{marginBottom: '1rem'}}>
                <Segment>
                    <Form>
                    <TextArea placeholder='Content' rows={1} autoHeight={true}/>
                    </Form>
                </Segment>
                <Segment>
                    <Form>
                    <TextArea placeholder='Hint' rows={1} autoHeight={true}/>
                    </Form>
                </Segment>
            </Segment.Group>
        )
    }
}

export default CardWizard

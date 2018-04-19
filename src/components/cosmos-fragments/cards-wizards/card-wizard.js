import React from 'react'
import PropTypes from 'prop-types'
import { Form , Segment, TextArea } from 'semantic-ui-react'

class CardWizard extends React.Component {

    static propTypes = {
        onValuesChange: PropTypes.func.isRequired
    }

    state = {
        frontContent: '',
        backContent: ''
    }

    onFieldValueChange = (fieldName, newValue) => 
        this.setState(
            {...this.state, [fieldName]: newValue},
            this.props.onValuesChange(this.state)
        )

    render() {
        return (
            <Segment.Group horizontal style={{marginBottom: '1rem'}}>
                <Segment>
                    <Form>
                    <TextArea
                        rows={1}
                        placeholder='Content'
                        autoHeight={true}
                        value={this.state.frontContent}
                        onChange={e => this.onFieldValueChange('frontContent', e.target.value)}
                    />
                    </Form>
                </Segment>
                <Segment>
                    <Form>
                    <TextArea
                        placeholder='Hint'
                        rows={1}
                        autoHeight={true}
                        value={this.state.backContent}
                        onChange={e => this.onFieldValueChange('backContent', e.target.value)}
                    />
                    </Form>
                </Segment>
            </Segment.Group>
        )
    }
}

export default CardWizard

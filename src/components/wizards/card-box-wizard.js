import React from 'react'
import PropTypes from 'prop-types'
import { Form , Input, Segment } from 'semantic-ui-react'
import { TagsInput } from 'r-s-tags-input'

class CardBoxWizard extends React.Component {
    render() {
        return (
            <Segment>
                <Form>
                    <Form.Group widths='equal'>
                        <Form.Field control={Input} label='Card box title' />
                        <Form.Field>
                            <label>Tags</label>
                            <div style={{padding: '0.5em'}}>
                            <TagsInput tags={['en']} />
                            </div>
                        </Form.Field>
                    </Form.Group>
                </Form>
            </Segment>
        )
    }
}

export default CardBoxWizard

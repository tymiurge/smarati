import React from 'react'
import PropTypes from 'prop-types'
import { Form , Input, Segment } from 'semantic-ui-react'
import { TagsInput } from 'r-s-tags-input'

class CardBoxWizard extends React.Component {
    static propTypes = {
        onValuesChange: PropTypes.func.isRequired
    }

    state = {
        frontContent: '',
        tags: []
    }

    onTagsChange = newTags => {
        const { state } = this
        const { tags } = state
        this.setState(
            {...state, tags: newTags},
            () => this.props.onValuesChange(this.state)
        )
    }

    onTagRemove = tag => this.onTagsChange(this.state.tags.filter(stateTag => stateTag === tag))

    onTagAdd = tag => this.onTagsChange([...this.state.tags, tag])

    onFrontContentChange = value => this.setState(
        {...this.state, frontContent: value},
        () => this.props.onValuesChange(this.state)
    )

    render() {
        const { frontContent, tags } = this.state
        return (
            <Segment>
                <Form>
                    <Form.Group widths='equal'>
                        <Form.Field 
                            control={Input}
                            label='Card box title'
                            value={frontContent}
                            onChange={e => this.onFrontContentChange(e.target.value)}
                        />
                        <Form.Field>
                            <label>Tags</label>
                            <div style={{padding: '0.5em'}}>
                            <TagsInput
                                tags={tags}
                                onTagRemove={tag => this.onTagRemove(tag)}
                                onTagAdd={tag => this.onTagAdd(tag)}
                            />
                            </div>
                        </Form.Field>
                    </Form.Group>
                </Form>
            </Segment>
        )
    }
}

export default CardBoxWizard

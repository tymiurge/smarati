import React from 'react'
import PropTypes from 'prop-types'
import { Form , Input, Segment } from 'semantic-ui-react'
import { TagsInput } from 'r-s-tags-input'
import { ef } from './../../helpers'

class CardBoxWizard extends React.Component {
    static propTypes = {
        frontContent: PropTypes.string,
        tags: PropTypes.string,
        onFrontContentChange: PropTypes.func,
        onTagsChange: PropTypes.func
    }

    static defaultProps = {
        frontContent: '',
        tags: [],
        onFrontContentChange: ef,
        onTagsChange: ef
    }

    onTagRemove = tag => this.props.onTagsChange(this.props.tags.filter(propsTag => propsTag === tag))

    onTagAdd = tag => this.props.onTagsChange(this.props.tags.push(tag))

    render() {
        const { frontContent, tags, onFrontContentChange, onTagsChange } = this.props
        return (
            <Segment>
                <Form>
                    <Form.Group widths='equal'>
                        <Form.Field 
                            control={Input}
                            label='Card box title'
                            value={frontContent}
                            onChange={onFrontContentChange}
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

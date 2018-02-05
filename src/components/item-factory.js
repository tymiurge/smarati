import React from 'react'
import PropTypes from 'prop-types'
import { Segment, Form } from 'semantic-ui-react'

const propTypes = {
    options: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string,
        value: PropTypes.string
    })).isRequired,
    selected: PropTypes.number.isRequired
}

class ItemFactory extends React.Component {

    state = {
        selected: 'card'
    }    

    handleItemTypeChange = (e, { value: selected } ) => {
        this.setState(Object.assign({}, this.state, {selected}))
    }

    render () {
        const { selected } = this.state
        return (
            <Segment>
                <Form>
                    <Form.Group inline>
                        <label>Create new: </label>
                        <Form.Radio label='Card' value='card' checked={selected === 'card'} onChange={this.handleItemTypeChange} />
                        <Form.Radio label='Card Box' value='card-box' checked={selected === 'card-box'} onChange={this.handleItemTypeChange} />
                        <Form.Radio label='List of Cards' value='list-of-cards' checked={selected === 'list-of-cards'} onChange={this.handleItemTypeChange} />
                    </Form.Group>
                </Form>
            </Segment>
        )
    }
}

// ItemFactory.propTypes = propTypes

export default ItemFactory
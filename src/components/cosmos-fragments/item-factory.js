import React from 'react'
import PropTypes from 'prop-types'
import { Segment, Form, Button, Input, Label } from 'semantic-ui-react'
import { TagsInput } from 'r-s-tags-input'
import CardBoxWizard from './../wizards/card-box-wizard'
import CardWizard from './../wizards/card-wizard'


class ItemFactory extends React.Component {

    static propTypes = {
        onCancelClick: PropTypes.func.isRequired
    }

    state = {
        selectedType: 'card'
    } 

    wizardTypes= [
        { 
            key: 'c', text: 'Card', value: 'card', wizard: CardWizard
        },
        { 
            key: 'b', text: 'Card Box', value: 'box', wizard: CardBoxWizard            
        },
        //{ key: 'l', text: 'List of Cards', value: 'cards-list' }
    ]
    
    renderWizardSelector = () => (
        <Form>
            <Form.Group inline>
                <label>Create new: </label>
                {
                    this.wizardTypes.map(type => (
                        <Form.Radio
                            key={type.key}
                            label={type.text}
                            value={type.value}
                            checked={this.state.selectedType === type.value}
                            onChange={(e, { value }) => {
                                this.handleItemTypeChange(value)
                            }}
                        />
                    ))
                }
            </Form.Group>
        </Form>
    )

    onWizardPropsChange = data => console.log('ok')

    renderWizard = () => {
        const { selectedType } = this.state
        const Wizard = this.wizardTypes.find(type => type.value === selectedType).wizard
        return <Wizard onPropsChange={this.onWizardPropsChange} />
    }

    handleItemTypeChange = value  => {
        this.setState(Object.assign({}, this.state, {selectedType: value}))
    }

    render () {
        const { selected } = this.state
        return (
            <Segment>
                { this.renderWizardSelector() }
                { this.renderWizard() }
                <div>
                    <Button size='tiny' color='green'>Save</Button>
                    <Button size='tiny' color='red' onClick={this.props.onCancelClick}>Cancel</Button>
                </div>
                
            </Segment>
        )
    }
}

// ItemFactory.propTypes = propTypes

export default ItemFactory

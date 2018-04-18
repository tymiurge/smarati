import React from 'react'
import PropTypes from 'prop-types'
import { Segment, Form, Button } from 'semantic-ui-react'
import { CardBoxWizard, CardWizard } from './cards-wizards'

class ItemFactory extends React.Component {

    static propTypes = {
        onCancel: PropTypes.func.isRequired,
        onSave: PropTypes.func.isRequired
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

    state = {
        selectedType: 'card',
        data: null
    } 
    
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

    onWizardPropsChange = data => {
        this.setState({...this.state, data})
    }

    onSave = () => this.props.onSave({
        ...this.state.data,
        type: this.state.selectedType
    })

    renderWizard = () => {
        const { selectedType } = this.state
        const Wizard = this.wizardTypes.find(type => type.value === selectedType).wizard
        return <Wizard onValuesChange={this.onWizardPropsChange} />
    }

    handleItemTypeChange = value  => {
        this.setState(Object.assign({}, this.state, {selectedType: value, data: null}))
    }

    render () {
        return (
            <Segment>
                { this.renderWizardSelector() }
                { this.renderWizard() }
                <div>
                    <Button size='tiny' color='green' onClick={() => this.onSave()}>Save</Button>
                    <Button size='tiny' color='red' onClick={this.props.onCancel}>Cancel</Button>
                </div>
                
            </Segment>
        )
    }
}

export default ItemFactory

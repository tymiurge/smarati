import React from 'react'
import { Card, Progress, Label, Segment, Icon } from 'semantic-ui-react'
import PropTypes from 'prop-types'

const propTypes = {
    name: PropTypes.string.isRequired,
    tags: PropTypes.array.isRequired,
    progress: PropTypes.number.isRequired,
}

class CardsBox extends React.Component {

    renderTags = tags => tags.map(tag => (
            <Label size='tiny' color='blue' key={tag}>
                eng
                <Icon name='delete' />
            </Label>
        )
    )

    render () {
        return (
            <Segment basic style={{padding: '0 0'}}>
                <Card
                    className='cards-box'
                    fluid
                    header={this.props.name}
                    description={this.renderTags(this.props.tags)}
                    href="/#"
                    meta={
                        <Progress percent={this.props.progress} size='tiny' color='green' />
                    }
                />
                
            </Segment>
        )
    }
}

CardsBox.propTypes = propTypes

export default CardsBox

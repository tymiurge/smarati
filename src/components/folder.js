import React from 'react'
import { Card, Progress, Label, Segment, Icon } from 'semantic-ui-react'
import PropTypes from 'prop-types'

const propTypes = {
    name: PropTypes.string.isRequired,
    tags: PropTypes.array.isRequired,
    progress: PropTypes.number.isRequired,
}

class Folder extends React.Component {

    renderTags = tags => tags.map(tag => (
            <Label size='tiny' as='a' inverted color='blue'>
                eng
                <Icon name='delete' />
            </Label>
        )
    )

    render () {
        return (
            <Segment basic style={{padding: '0 0'}}>
                <Card
                    fluid
                    link
                    header={this.props.name}
                    description={this.renderTags(this.props.tags)}
                />
                <Progress percent={this.props.progress} attached='bottom' />
            </Segment>
        )
    }
}

Folder.propTypes = propTypes

export default Folder

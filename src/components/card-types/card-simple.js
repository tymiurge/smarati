import React from 'react'
import PropTypes from 'prop-types'
import { Segment, Card, Rating } from 'semantic-ui-react'

class SimpleCard extends React.Component {

    static propTypes = {
        name: PropTypes.string.isRequired,
        progress: PropTypes.number.isRequired
    }

    render() {
        return (
            <Segment basic style={{padding: '0 0'}}>
                <Card style={{display: 'flex', alignItems: 'center'}}
                    className='cards-box'
                    fluid
                    header={this.props.name}
                    href="/#"
                    meta={
                        <Rating maxRating={7} defaultRating={this.props.progress} disabled size='mini' />
                    }
                />
                
            </Segment>
        )
    }
}

export default SimpleCard

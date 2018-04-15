import React from 'react'
import PropTypes from 'prop-types'
import { Segment, Card } from 'semantic-ui-react'

class SimpleCard extends React.Component {

    static propTypes = {

    }

    render() {
        return (
            <Segment basic style={{padding: '0 0'}}>
                <Card
                    className='cards-box'
                    fluid
                    header={this.props.name}
                    href="/#"
                    
                />
                
            </Segment>
        )
    }
}

export default SimpleCard

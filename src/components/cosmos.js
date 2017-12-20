import React from 'react'
import { Container, Menu, Icon, Button } from 'semantic-ui-react'

class Cosmos extends React.Component {

    render () {
        return (
            <Container fluid>
                <Menu attached='top'>
                    <Menu.Item active='false'>
                        <Icon name='home'></Icon>
                    </Menu.Item>
                    <Menu.Item active='true' name='cards'/>
                </Menu>
            </Container>
        )
    }
}

export default Cosmos

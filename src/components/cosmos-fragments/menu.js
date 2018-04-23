import React from 'react'
import PropTypes from 'prop-types'
import { Menu, Icon, Breadcrumb } from 'semantic-ui-react'

class CosmosMenu extends React.Component {

    static propTypes = {
        onSearchClick: PropTypes.func.isRequired,
        onAddClick: PropTypes.func.isRequired
        //title: PropTypes.array.isRequired
    }

    render() {
        return (
            <Menu secondary className='page-menu'>
                <Menu.Item>
                    <Icon link name='search' size='large' onClick={this.props.onSearchClick}></Icon>
                </Menu.Item>
                <Menu.Item>
                    <Icon link name='add' size='large' onClick={this.props.onAddClick}></Icon>
                </Menu.Item>
                <Menu.Item>
                    <Icon link name='pencil' size='large'></Icon>
                </Menu.Item>
                <Menu.Item>
                    <Breadcrumb size='large'>
                        <Breadcrumb.Section link>Main Space</Breadcrumb.Section>
                        <Breadcrumb.Divider><Icon name='angle right' /></Breadcrumb.Divider>
                        <Breadcrumb.Section active>Waiting for godoth</Breadcrumb.Section>
                        <Breadcrumb.Divider><Icon name='lightning'/></Breadcrumb.Divider>
                        <Breadcrumb.Section link>Uncompleted cards</Breadcrumb.Section>
                        <Breadcrumb.Divider><Icon name='lightning'/></Breadcrumb.Divider>
                        <Breadcrumb.Section link>Learn</Breadcrumb.Section>
                    </Breadcrumb>
                </Menu.Item>
                
                <Menu.Menu position='right'>
                    
                    <Menu.Item>
                        <Icon name='user' size='large'></Icon>
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
        )
    }
}

export default CosmosMenu

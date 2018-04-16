import React from 'react'
import { Segment, Menu, Input, Checkbox, Icon } from 'semantic-ui-react'
import PropTypes from 'prop-types'

class SearchBar extends React.Component {

    static propTypes = {
        onCloseClick: PropTypes.func
    }

    static defaultTypes = {
        onCloseClick: () => {}
    }

    render() {
        return (
            <div style={{marginBottom: '1rem'}}>
                <Menu borderless attached='top' secondary>
                    <Menu.Item>
                        <Input transparent placeholder='Search for...' />
                    </Menu.Item>
                    <Menu.Menu position='right'>
                        <Menu.Item>
                            <Icon name='search' />
                        </Menu.Item>
                        <Menu.Item>
                            <Icon name='close' onClick={this.props.onCloseClick}/>
                        </Menu.Item>
                    </Menu.Menu>
                </Menu>
                <Segment attached='bottom' className='half-padding'>
                    <Checkbox label='Search in nested boxes' style={{marginRight: '1em'}}/>
                    <Checkbox label='Include box titles' />
                </Segment>
            </div>
        )
    }
}

export default SearchBar

import React from 'react'
import { Container, Menu, Icon, Card, Grid, Progress, Label, Segment, Button, Breadcrumb, Form } from 'semantic-ui-react'
import { CardsBox, SimpleCard } from './card-types'
import ItemFactory from './item-factory'
import SearchBar from './search-bar'
import PropTypes from 'prop-types'

const content = [
    {

    }
]

class Cosmos extends React.Component {

    static propTypes = {

    }

    constructor (props) {
        super(props)
        this.state = {
            newItemWizardShown: false,
            searchBarShown: false
        }
    }

    toggleNewItemWizard = () => {
        this.setState({...this.state, newItemWizardShown: !this.state.newItemWizardShown})
    }

    toggleSearchPanel = () => {
        this.setState({...this.state, searchBarShown: !this.state.searchBarShown})
    }

    render () {
        return (
            <Container fluid>
                <Container className={'p-1em'}>
                    <Menu secondary className='page-menu'>
                        <Menu.Item>
                            <Icon link name='search' size='large' onClick={this.toggleSearchPanel}></Icon>
                        </Menu.Item>
                        <Menu.Item>
                            <Icon link name='add' size='large' onClick={this.toggleNewItemWizard}></Icon>
                        </Menu.Item>
                        <Menu.Item>
                            <Icon link name='pencil' size='large'></Icon>
                        </Menu.Item>
                        
                        <Menu.Menu position='right'>
                            <Menu.Item>
                                <Breadcrumb size='large'>
                                    <Breadcrumb.Section link active>Main Space</Breadcrumb.Section>
                                </Breadcrumb>
                            </Menu.Item>
                            <Menu.Item>
                                <Icon name='user' size='large'></Icon>
                            </Menu.Item>
                        </Menu.Menu>
                    </Menu>
                    {
                        this.state.searchBarShown &&
                        <SearchBar onCloseClick={this.toggleSearchPanel} />
                    }
                    {
                        this.state.newItemWizardShown &&
                        <ItemFactory 
                            options={[
                                { key: 'c', text: 'Card', value: 'card' },
                                { key: 'b', text: 'Card Box', value: 'card-box' },
                                { key: 'l', text: 'List of Cards', value: 'cards-list' },
                            ]}
                            selected={0}
                        />
                    }
                    <Grid columns={4}>
                        <Grid.Row>
                            <Grid.Column>
                                <CardsBox
                                    name={'refregerator'}
                                    tags={['tag1']}
                                    progress={70}
                                />
                            </Grid.Column>
                            <Grid.Column>
                                <CardsBox
                                    name={'Door into the summer'}
                                    tags={['tag1']}
                                    progress={70}
                                />

                            </Grid.Column>
                            <Grid.Column>
                                <CardsBox
                                    name={'Waiting for Godot'}
                                    tags={['tag1']}
                                    progress={70}
                                />


                            </Grid.Column>
                            <Grid.Column>
                                <CardsBox
                                    name={'Romeo and Juliet'}
                                    tags={['tag1', 'tag2']}
                                    progress={60}
                                />
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column>
                                <SimpleCard 
                                    name={'confined'}
                                />
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Container>

                <Container >

                </Container>
            </Container>
        )
    }
}

export default Cosmos

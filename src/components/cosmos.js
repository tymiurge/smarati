import React from 'react'
import { Container, Menu, Icon, Card, Grid, Progress, Label, Segment, Button, Breadcrumb } from 'semantic-ui-react'
import CardsBox from './cards-box'

class Cosmos extends React.Component {

    render () {
        return (
            <Container fluid>
                <Container className={'p-1em'}>
                    <Menu secondary className='page-menu'>
                        <Menu.Item>
                            <Icon link name='search' size='large'></Icon>
                        </Menu.Item>
                        <Menu.Item>
                            <Icon link name='add' size='large'></Icon>
                        </Menu.Item>
                        <Menu.Item>
                            <Icon link name='pencil' size='large'></Icon>
                        </Menu.Item>
                        
                        <Menu.Menu position='right'>
                            <Menu.Item>
                                <Breadcrumb size='large'>
                                    <Breadcrumb.Section link>Home</Breadcrumb.Section>
                                    <Breadcrumb.Divider />
                                    <Breadcrumb.Section link>Store</Breadcrumb.Section>
                                    <Breadcrumb.Divider />
                                    <Breadcrumb.Section active>T-Shirt</Breadcrumb.Section>
                                </Breadcrumb>
                            </Menu.Item>
                            <Menu.Item>
                                <Icon name='user' size='large'></Icon>
                            </Menu.Item>
                        </Menu.Menu>
                    </Menu>
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
                    </Grid>
                </Container>

                <Container >

                </Container>
            </Container>
        )
    }
}

export default Cosmos

import React from 'react'
import { Container, Menu, Icon, Card, Grid, Progress, Label, Segment, Button } from 'semantic-ui-react'
import CardsBox from './cards-box'

class Cosmos extends React.Component {

    render () {
        return (
            <Container fluid>
                <Menu attached='top'>
                    <Menu.Item active='false'>
                        <Icon name='snowflake outline'></Icon>
                    </Menu.Item>
                    <Menu.Item active='true' name='cards'/>
                </Menu>
                <Container className={'p-1em'}>
                    <Menu secondary>
                        <Menu.Item>
                            <Icon name='snowflake outline'></Icon>
                        </Menu.Item>
                        <Menu.Item name='cards'/>
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

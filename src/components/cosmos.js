import React from 'react'
import { Container, Menu, Icon, Card, Grid, Progress, Label, Segment, Button } from 'semantic-ui-react'

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
                                <Card
                                    fluid
                                    link
                                    header='Refrigerator'
                                    meta='Scientist'
                                    description={[
                                        'Rick is a genius scientist whose alcoholism and reckless,',
                                        ' nihilistic behavior are a source of concern for his family',
                                    ].join('')}
                                />
                            </Grid.Column>
                            <Grid.Column>
                                <Card
                                    fluid
                                    link
                                    header={'Waiting for Godot'}

                                    description={
                                        <div>
                                            <Label size='tiny' as='a' inverted color='blue'>
                                                eng
                                                <Icon name='delete' />
                                            </Label>

                                            <Progress percent={100} attached='top' />
                                        </div>
                                    }

                                />


                            </Grid.Column>
                            <Grid.Column>
                                <Segment basic style={{padding: '0 0'}}>
                                    <Card
                                        fluid
                                        link
                                        header='Rick Sanchez'
                                        meta='Scientist'
                                        description={[
                                            'Rick is a genius scientist whose alcoholism and reckless,',
                                            ' nihilistic behavior are a source of concern for his family',
                                        ].join('')}
                                    />
                                    <Progress percent={100} attached='bottom' />
                                </Segment>


                            </Grid.Column>
                            <Grid.Column>
                                <Card
                                    fluid
                                    link
                                    header='Rick Sanchez'
                                    meta='Scientist'
                                    description={[
                                        'Rick is a genius scientist whose alcoholism and reckless,',
                                        ' nihilistic behavior are a source of concern for his family',
                                    ].join('')}
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

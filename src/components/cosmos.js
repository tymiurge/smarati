import React from 'react'
import { Container, Menu, Icon, Card, Grid, Progress, Label, Segment, Button, Breadcrumb, Form, GridRow } from 'semantic-ui-react'
import { CardsBox, SimpleCard } from './card-types'
import ItemFactory from './item-factory'
import SearchBar from './search-bar'
import PropTypes from 'prop-types'
import { chunkArray } from './../helpers'

const content = [
    {
        id: 1,
        type: 'box',
        name: 'refregerator',
        tags: ['tag1'],
        progress: 90
    }, 
    {
        id: 2, 
        type: 'box',
        name: 'waiting for godoth',
        tags: ['t1', 't2'],
        progress: 89
    },
    {
        id: 3,
        type: 'box',
        name: 'linux',
        tags: ['t2', 'linux'],
        progress: 10
    },
    {
        id: 4,
        type: 'box',
        name: 'romeo and juliet',
        tags: ['t3', 't4'],
        progress: 48
    },
    {
        id: 5,
        type: 'box',
        name: 'leviaphan wakes',
        tags: ['t5', 't6'],
        progress: 25
    }, 
    {
        id: 6,
        type: 'simple',
        name: 'confined' 
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

    renderCards = () => 
        chunkArray(content.filter(card => card.type !== 'box'), 4)
        .map((row, rowIdx) => (
            <Grid.Row key={`_cosmos_cards_row_${rowIdx}`}>
                {
                    row.map((memoCard, memoCardIdx) => (
                        
                        <Grid.Column key={`_cosmos_cards_memo_${memoCardIdx}`}>
                            {
                                memoCard.type === 'simple' &&
                                <SimpleCard
                                    name={memoCard.name}
                                />    
                            }
                        </Grid.Column>
                    ))
                }
            </Grid.Row>
        ))

    renderCardBoxes = () => 
        chunkArray(content.filter(card => card.type === 'box'), 4)
        .map((row, rowIdx) => (
            <Grid.Row key={`_cosmos_boxes_row_${rowIdx}`}>
                { 
                    row.map((box, boxIdx) => (
                        <Grid.Column key={`_cosmos_cards_box_${boxIdx}`}>
                            <CardsBox
                                name={box.name}
                                tags={box.tags}
                                progress={box.progress}
                            />
                        </Grid.Column>
                    ))
                }
            </Grid.Row>
        ))

    renderCardsGrid = () => [
        ...this.renderCardBoxes(),
        ...this.renderCards()
    ]

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
                        { this.renderCardsGrid() }
                    </Grid>
                </Container>
            </Container>
        )
    }
}

export default Cosmos

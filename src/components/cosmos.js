import React from 'react'
import { Container, Grid } from 'semantic-ui-react'
import { CardsBox, SimpleCard } from './card-types'
import { CosmosMenu, SearchBar, ItemFactory } from './cosmos-fragments'
import PropTypes from 'prop-types'
import { chunkArray } from './../helpers'
import { fetchContent } from '../reducers/cosmos'
import { connect } from 'react-redux'

class Cosmos extends React.Component {

    static GIRD_SIZE = 4

    static propTypes = {
        data: PropTypes.array.isRequired,
        onPageMount: PropTypes.func.isRequired
    }

    state = {
        newItemWizardShown: false,
        searchBarShown: false
    }

    componentDidMount () {
        this.props.onPageMount()
    }

    toggleNewItemWizard = () => {
        this.setState({...this.state, newItemWizardShown: !this.state.newItemWizardShown})
    }

    toggleSearchPanel = () => {
        this.setState({...this.state, searchBarShown: !this.state.searchBarShown})
    }

    renderCards = () => 
        chunkArray(this.props.data.filter(card => card.type !== 'box'), 4)
        .map((row, rowIdx) => (
            <Grid.Row key={`_cosmos_cards_row_${rowIdx}`}>
                {
                    row.map((memoCard, memoCardIdx) => (
                        
                        <Grid.Column key={`_cosmos_cards_memo_${memoCardIdx}`}>
                            {
                                memoCard.type === 'simple' &&
                                <SimpleCard
                                    name={memoCard.name}
                                    progress={memoCard.progress}
                                />    
                            }
                        </Grid.Column>
                    ))
                }
            </Grid.Row>
        ))

    renderCardBoxes = () => 
        chunkArray(this.props.data.filter(card => card.type === 'box'), 4)
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
                    <CosmosMenu
                        onSearchClick={this.toggleSearchPanel}
                        onAddClick={this.toggleNewItemWizard}
                    />
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
                    <Grid columns={Cosmos.GIRD_SIZE}>
                        { this.renderCardsGrid() }
                    </Grid>
                </Container>
            </Container>
        )
    }
}

const mapStateToProps = state => ({
    data: state.cosmos
})

const mapDispatchToProps = dispatch => {
    return {
        onPageMount: () => { dispatch(fetchContent()) }
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Cosmos)

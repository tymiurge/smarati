import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Container, Grid } from 'semantic-ui-react'
import { CardsBox, SimpleCard } from './card-types'
import { CosmosMenu, SearchBar, ItemFactory, NoDataMessage } from './cosmos-fragments'
import { fetchContent, saveCard } from '../reducers/cosmos'
import { chunkArray } from './../helpers'

class Cosmos extends React.Component {

    static GIRD_SIZE = 4

    static propTypes = {
        data: PropTypes.array.isRequired,
        fetchMade: PropTypes.bool.isRequired,
        onPageMount: PropTypes.func.isRequired,
        onCardSavingRequest: PropTypes.func.isRequired
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

    onCardSave = data => this.setState(
        {...this.state, newItemWizardShown: false},
        () => this.props.onCardSavingRequest(data)
    )

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
                            onCancel={ () => this.toggleNewItemWizard() }
                            onSave={ data => this.onCardSave(data)}
                        />
                    }
                    {
                        this.props.fetchMade && this.props.data.length === 0 &&
                        <NoDataMessage />
                    }
                    {
                        this.props.fetchMade && this.props.data.length > 1 &&
                        <Grid columns={Cosmos.GIRD_SIZE}>
                            { this.renderCardsGrid() }
                        </Grid>
                    }
                    
                </Container>
            </Container>
        )
    }
}

const mapStateToProps = state => ({
    data: state.cosmos.content,
    fetchMade: state.cosmos.fetchMade
})

const mapDispatchToProps = dispatch => {
    return {
        onPageMount: () => dispatch(fetchContent()),
        onCardSavingRequest: data => dispatch(saveCard(data)) 
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Cosmos)

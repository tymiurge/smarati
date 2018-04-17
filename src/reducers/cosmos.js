import * as api from './../api'

const COSMOS_CONTENT_REQUEST = 'cosmos/content/request'
const CARD_ADDED = 'card/add/request'

const cosmos = (state = [], action) => {
    switch (action.type) {
        case COSMOS_CONTENT_REQUEST: 
            return action.content
        case CARD_ADDED:
            return [...state, action.card]
        default: 
            return state
    }
}

export default cosmos

// ***************************************************************
// *************************** ACTIONS ***************************
// ***************************************************************


export const fetchContent = parentId => dispatch => 
    api.fetchCards(parentId).then(content => dispatch({
        type: COSMOS_CONTENT_REQUEST,
        content
    })) 

export const saveCard = card => dispatch => 
    api.saveCard(card).then(savedCard => dispatch({
        type: CARD_ADDED,
        card: savedCard
    }))
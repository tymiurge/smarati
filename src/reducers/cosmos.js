
const COSMOS_CONTENT_REQUEST = 'cosmos/content/request'
const CARD_ADD_REQUEST = 'card/add/request'

const cosmos = (state = [], action) => {
    switch (action.type) {
        case COSMOS_CONTENT_REQUEST: 
            return action.content
        case CARD_ADD_REQUEST:
            return [...state, action.card]
        default: 
            return state
    }
}

export default cosmos

// ***************************************************************
// *************************** ACTIONS ***************************
// ***************************************************************

export const fetchContent = parentId => dispatch => {
    dispatch({
        type: COSMOS_CONTENT_REQUEST,
        content: []
    })
}

// ACTIONS 

/*
export const fetchForms = () => dispatch => {
    api.fetchFormsList().then(list => {
        dispatch({
            type: LIST_RECEIVED,
            list
        })
    })
}

export const deleteForm = formId => ({
    type: FORM_DELETED,
    formId
})
*/
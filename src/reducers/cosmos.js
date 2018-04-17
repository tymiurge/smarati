
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


const _content = [
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
        name: 'confined',
        progress: 6 
    },
    {
        id: 7,
        type: 'simple',
        name: 'limp',
        progress: 0, 
    },
    {
        id: 8,
        type: 'simple',
        name: 'crank',
        progress: 3
    }
]

export const fetchContent = parentId => dispatch => {
    dispatch({
        type: COSMOS_CONTENT_REQUEST,
        content: _content
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
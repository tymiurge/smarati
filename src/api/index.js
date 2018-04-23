const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))
const API_HOST = 'http://localhost:4000'

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

export const fetchCards = parentId => delay(30).then( () => {
    return []//_content
})

export const saveCard = card => 
    fetch(`${API_HOST}/api/card/add`, {
        method: 'POST',
        headers: new Headers({
            'Content-Type': 'application/json',
            'accept': 'application/json'
        }),
        body: JSON.stringify(card),
        mode: 'cors'
    })

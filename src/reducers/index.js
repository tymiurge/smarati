import cosmos from './cosmos'

const reducer = (state = {}, action) => ({
    cosmos: cosmos(state.cosmos, action)
})
  
export default reducer
  
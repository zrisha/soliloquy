export default
function params(state = {}, action){
  switch(action.type) {
    case 'SET_PARAMS':
      return action.params;
    default:
      return state;
  }
}

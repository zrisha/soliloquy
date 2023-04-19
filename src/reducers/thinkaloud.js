export default
function thinkaloud(state = {

}, action){
  switch(action.type) {
    case 'GET_LINEDATA':
      return Object.assign({}, state, {
        lineData: action.lineData
      });
    case 'USER_NEXT_LINE':
    case 'NEXT_LINE':
      return Object.assign({}, state, {
        lineOrder: state.lineOrder + 1,
        thought:null
      });
    case 'SELECT_LINE':
      return Object.assign({}, state, {
        activeLine: action.activeLine
      });
    case 'START_THINKALOUD':
      return Object.assign({}, state, {
        lineOrder: action.lineNum, running: true
      });
    case 'END_THINKALOUD':
      return Object.assign({}, state, {
        activeLine: null, running: false, lineOrder: null, completed: true
      });
    case 'TRIGGER_THOUGHT':
      return Object.assign({}, state, {
        thought: action.thought
      });
    case 'HOVER_THOUGHT':
      return Object.assign({}, state, {
        hoveredThought: action.thought
      });
    case 'SET_CONFIG':
      return Object.assign({}, state, {
        data: action.data
      });
    default:
      return state;
  }
}

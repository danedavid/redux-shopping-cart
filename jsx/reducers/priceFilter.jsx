export default function(state = { min: 0, max: 100000 }, action) {
  if( action.type === 'PRICE_FILTER' ) {
    let newState = Object.assign({}, state, action.range);
    return newState;
  }
  return state;
}

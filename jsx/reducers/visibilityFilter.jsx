export default function( state = false, action) {
  if( action.type === 'VIS_FILTER' ) {
    return (!state);
  }
  return state;
}

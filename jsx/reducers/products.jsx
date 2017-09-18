var initState = [];

export default function( state = initState, action ) {
  if( action.type === "RECV_DATA" ) {
    let newState = action.payload;
    return newState;
  }
  if( action.type === "ADD_ITEM" ) {
    let newState = [...state];

    for( let i in newState ) {
      if( newState[i].productID === action.productObj.productID ) {
        newState[i].quantity--;
      }
    }
    return newState;
  }
  return state;
}

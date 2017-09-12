export default function(state = 0, action) {
  if( action.type === "ADD_ITEM" ) {
    return state + action.productObj.price;
  }
  return state;
}

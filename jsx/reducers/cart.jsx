export default function(state = [], action) {

  if( action.type === "ADD_ITEM") {
    let cartIDs = _.pluck(state,"productID");

    let index = cartIDs.indexOf(action.productObj.productID);

    if( index !== -1 ) {
      let newState = [...state];
      newState[index].count++;
      return newState;
    }

    let newObj = Object.assign({}, action.productObj, {count: 1});
    return state.concat(newObj);
  }
  return state;
}

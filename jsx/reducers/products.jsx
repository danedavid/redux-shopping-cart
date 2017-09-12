const initState = [
  {
    id: 1,
    name: "Whirlpool Refrigerator",
    price: 12500,
    quantity: 2
  },
  {
    id: 2,
    name: "Moto G Play 16GB",
    price: 9800,
    quantity: 19
  },
  {
    id: 3,
    name: "WD External Hard Disk 1 TB",
    price: 5500,
    quantity: 10
  }
];

export default function( state = initState, action ) {
  if( action.type === "ADD_ITEM" ) {
    let newState = [...state];

    for( let i in newState ) {
      if( newState[i].id === action.productObj.id ) {
        newState[i].quantity--;
      }
    }
    return newState;
  }
  return state;
}

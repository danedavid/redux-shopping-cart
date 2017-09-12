export const addItemToCart = (productObj) => ({
  type: 'ADD_ITEM',
  productObj: productObj
});

export const visibilityFilter = () => ({
  type: 'VIS_FILTER'
});

export const priceFilter = (range) => ({
  type: 'PRICE_FILTER',
  range: range
});

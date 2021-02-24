// import SHOP_DATA from './shop.data'
import ShopActionTypes from './shop.types';

const INITIAL_STATE = {
  collections: /*SHOP_DATA*/ null,
  isFetching: false,
  errorMessage: undefined // Or an empty string
}

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  /* Tell the action that fetching has started and the API call is being made */
  case ShopActionTypes.FETCH_COLLECTIONS_START:
    return {
      ...state,
      isFetching: true
    };
  /* Once the API call is complete, update the collections and tell the action that fetching/loading is over */
  case ShopActionTypes.FETCH_COLLECTIONS_SUCCESS:
    return {
      ...state,
      isFetching: false,
      collections: action.payload
    };
  /* If there is an error in making the API call, go to the errorMessage action */
  case ShopActionTypes.FETCH_COLLECTIONS_FAILURE:
    return {
      ...state,
      isFetching: false,
      errorMessage: action.payload
    };
    default:
      return state
  }
}

export default shopReducer;


/*case ShopActionTypes.UPDATE_COLLECTIONS:
  return {
    ...state,
    collections: action.payload
  }*/

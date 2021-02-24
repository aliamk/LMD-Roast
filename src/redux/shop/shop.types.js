const ShopActionTypes = {
    //UPDATE_COLLECTIONS: 'UPDATE_COLLECTIONS'
    FETCH_COLLECTION_START: 'FETCH_COLLECTIONS_START',       // Tell Firestore that you're starting a fetch call
    FETCH_COLLECTIONS_SUCCESS: 'FETCH_COLLECTIONS_SUCCESS',   // A successful API call is returned with data
    FETCH_COLLECTIONS_FAILURE: 'FETCH_COLLECTIONS_FAILURE'    // What is returned when any kind of error occurs in the API call
  };
  
  export default ShopActionTypes;
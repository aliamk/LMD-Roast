import ShopActionTypes from './shop.types';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

/* Communication between this file and shop.reducer ping back and forth
(the reducer functions trigger action functions, which in turn 
ask other reducer functions to trigger other action functions) */

/* Once Redux Thunk was added, all the API call/fetch functionality has been written
into reducers and functions and removed from shop.component.jsx */

/* export const updateCollections = collectionsMap => ({
  type: ShopActionTypes.UPDATE_COLLECTIONS,
  payload: collectionsMap
}); */

// NEW CODE AFTER ADDING THUNK
/* Fetch state from the shop.reducer */
export const fetchCollectionsStart = () => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_START
});

/* Tell the reducer that the API call was a success because we now have the collectionsMap */
export const fetchCollectionsSuccess = collectionsMap => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap
});

/* If the reducer says fetchCollectionsStartAsync has failed, run the error
code in fetchCollectionsFailure */
export const fetchCollectionsFailure = errorMessage => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage
});

/* After the fetchCollectionsStart function call, Redux will create the collectionRef, 
then dispatch fetchCollectionsStartAsync which will switch isFetching (in shop.reducer)
to true/loading, and then begin the async request from Firebase. Once the collectionsMap
is returned, another dispatch is made telling the reducer to trigger fetchCollectionsSuccess  */
export const fetchCollectionsStartAsync = () => {
  return dispatch => {
    const collectionRef = firestore.collection('collections');
    dispatch(fetchCollectionsStart());

    collectionRef.get().then(snapshot => {
        const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        dispatch(fetchCollectionsSuccess(collectionsMap));
      })
      .catch(error => dispatch(fetchCollectionsFailure(error.message)));
  };
};
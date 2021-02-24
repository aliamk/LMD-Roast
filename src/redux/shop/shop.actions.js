import ShopActionTypes from './shop.types';
// import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils'

/* Communication between this file and shop.reducer ping back and forth
(the reducer functions trigger action functions, which in turn 
ask other reducer functions to trigger other action functions) */

/* Once Redux Thunk was added, all the API call/fetch functionality has been written
into reducers and functions and removed from shop.component.jsx */

 export const updateCollections = collectionsMap => ({
  type: ShopActionTypes.UPDATE_COLLECTIONS,
  payload: collectionsMap
}); 
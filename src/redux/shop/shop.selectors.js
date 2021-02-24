import { createSelector } from 'reselect';

/* Don't need COLLECTION_ID_MAP now bc we've turned SHOP_DATA into an object
(from an array), and modified selectCollection below by removing 
.find:
const COLLECTION_ID_MAP = {
  hats: 1,
  sneakers: 2,
  jackets: 3,
  womens: 4,
  mens: 5
}
*/

const selectShop = state => state.shop;

export const selectCollection = createSelector(
  [selectShop],
  shop => shop.collections
);

/* For HOMEPAGE: Convert the collections object into an array for selectCollections to use
Get all the keys in object:collections and make an array
Map over all the keys in the array and return all the values at those keys 
Firebase update: since moving data to firebase, we need to modify this to say: 
If collections is null, then return an empty array/version of our objects 
(collections page won't have any clothing items to show)
*/
export const selectCollectionsForPreview = createSelector(
  [selectCollection],
  collections =>
    collections ? Object.keys(collections).map(key => collections[key]) : []
);
  
/*export const selectCollection = collectionUrlParam =>
createSelector(
  [selectCollections],
  collections => collections.find(
      collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam]
    ) 
)*/

//REPLACED .FIND WITH BELOW CODE 
 // If the collections object is null, return an empty array 
 export const selectIsCollectionFetching = createSelector(
  [selectShop],
  shop => shop.isFetching
);
 
 // Modified for Redux Thunk
//  export const selectIsCollectionFetching = createSelector(
//   [selectShop],
//   shop => shop.isFetching
// );

 /* If our collections is loaded we'll get true 
 From the shop.reducer, return shop.collections as a boolean value.  The default
 value is null.  Double bangs will return true if our collections is loaded.  */
 export const selectIsCollectionsLoaded = createSelector(
  [selectShop],
  shop => !!shop.collections
);

//  Double bangs
/* !!0 => false
 !!'' => false
 !!null => false
 !!{} => true
 */









import React from 'react'
import { Route } from 'react-router-dom'
// import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux'
import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions'
// import { selectIsCollectionFetching, selectIsCollectionsLoaded } from '../../redux/shop/shop.selectors'
// import WithSpinner from '../../components/with-spinner/with-spinner.component' 
// const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview) 
// const CollectionPageWithSpinner = WithSpinner(CollectionPage) 
import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container'
import CollectionPageContainer from '../collection/collection.container'

// =============================================================================================

/* THIS FILE CREATES THE /3000 HOMEPAGE.  COLLECTION DATA IS POPULATED HERE (ALL 5 COLLECTIONS ITEMS) */

class ShopPage extends React.Component {

  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props
    fetchCollectionsStartAsync()
  }
  render() {
    const { match } = this.props
    return (
      <div className='shop-page'>
        <Route
          exact
          path={`${match.path}`}
          component={CollectionsOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
        />
      </div>
    )
  }
}

// Modified for Redux-Thunk
const mapDispatchToProps = dispatch => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
})

export default connect(null, mapDispatchToProps)(ShopPage)


/* REPLACED THIS WITH THE CLASS ShopPage COMPONENT ABOVE AFTER DYNAMICALLY TRANSFERRING
THE SHOP_DATA TO FIREBASE.
const ShopPage = ({ match }) => (
  <div className='shop-page'>
    <Route exact path={`${ match.path }`} component={CollectionsOverview} />
    <Route path={`${ match.path }/:collectionId`} component={CollectionPage}/>
  </div>
)*/

  // Modified for Redux-Thunk - NO LONGER NEED MAPSTATETOPROPS
/*const mapStateToProps = createStructuredSelector({
  isFetchingCollections: selectIsCollectionFetching,
  isCollectionsLoaded: selectIsCollectionsLoaded
})

/* ROUTING / NAVIGATION
1 - The first ROUTE goes to the Collections Overview component - this is the HOMEPAGE
2 - The second ROUTE: Nested Routing: we want to only populate the categories page with
the items that the user has clicked on i.e., only return hats when clicking hats
- To do this, we want to access the URL, specifically the string after shop
- If it says shop/jackets, we want the category page to be populated by only items
within the jackets data so we use: path={`${ match.path }/:collectionId`}
*/
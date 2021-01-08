import React, { Component } from 'react'
import { CollectionPreview } from '../../components/collection-preview/CollectionPreview';
import SHOP_DATA from './shopData';

export default class ShopPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA
    }
    

  }
  render() {
    const {collections} = this.state;
    return (
      <div className="shop__page">
        {
          collections.map(({id, ...otherCollectionProps}) => (
            <CollectionPreview key={id} {...otherCollectionProps} /> 
          ))
        }
      </div>
    )
  }
}

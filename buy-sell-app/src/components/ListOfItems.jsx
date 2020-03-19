import React, { Component, Fragment } from 'react';

class ListOfItems extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <Fragment>
                <div>
                    {/* display selling list */}
                    <h2>Items for Sell</h2>
                    {this.props.itemsForSell.map(
                        (item,inx) => {
                            return (
                                <div key = {inx}>
                                    <p>{item.itemName}</p>
                                    <p>Price: ${item.itemPrice}</p>
                                    <p>Condition: {item.itemCondition}</p>
                                </div>
                            )
                        }
                    )}
                </div>

                <div>
                    {/* display offer list */}
                   <h2>Item Offers</h2>
                       {this.props.itemOffer.map(
                           (offer,inx) => {
                               return (
                                   <div key = {inx}>
                                       <p>{offer.offerName}</p>
                                       <p>Price: ${offer.offerPrice}</p>
                                   </div>
                               )
                           }
                       )}
                </div>

            </Fragment>
        );
    }
}

export default ListOfItems;
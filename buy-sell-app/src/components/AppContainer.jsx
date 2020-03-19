import React, { Component, Fragment } from 'react';
import ListOfItems from './ListOfItems';
import Buy from './Buy';
import Sell from './Sell';
import '../App.css';


class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            itemsForSell: [],
            itemOffer: [],
            isBuying: false,
            isSelling: false
        }
    }

    //update itemsForSell array with new items
    updateItemsForSell = (newList) => {
        this.setState({ itemsForSell: newList });
    }

    //update itemOffer array with new offers
    updateItemOffers = (newList) => {
        this.setState({ itemOffer: newList });
    }

    //update flags for buying and selling
    handleBuyingSelling = (event) => {
        if (event.target.name === 'buying') {
            this.setState({
                isBuying: true,
                isSelling: false
            })
        }
        else if (event.target.name === 'selling') {
            this.setState({
                isBuying: false,
                isSelling: true
            })
        }
    }
    render() {
        //display buying or selling forms when respective buttons are clicked
        let userForm;
        if (this.state.isBuying) {
            userForm = <Buy updateItemOffers={this.updateItemOffers} />
        }
        else if (this.state.isSelling) {
            userForm = <Sell updateItemsForSell={this.updateItemsForSell} />
        }

        return (
            <Fragment>
                <div className="container">
                    <h1 className='header'>Buy Sell App</h1>
                    <div className="item-lists">
                        {/* pass in list for selling and offers as properties */}
                        <ListOfItems itemsForSell={this.state.itemsForSell} itemOffer={this.state.itemOffer} />
                    </div>

                    <div className="buy-sell">
                        <button name='buying' onClick={this.handleBuyingSelling}>Buying</button>
                        <button name='selling' onClick={this.handleBuyingSelling}>Selling</button>
                        {userForm}
                    </div>
                </div>

            </Fragment>
        );
    }
}

export default AppContainer;
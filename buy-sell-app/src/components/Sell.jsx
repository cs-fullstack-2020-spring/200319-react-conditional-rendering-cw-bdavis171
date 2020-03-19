import React, { Component, Fragment } from 'react';
import '../App.css';

class Sell extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            itemsForSell : [],
            itemName : '',
            itemPrice : 0,
            itemCondition : ''
         }
    }

    //handle changes to fields
    handleChange = (event) => {
        if (event.target.name === 'itemName') {
            this.setState({itemName: event.target.value});
        } else  if (event.target.name === 'itemPrice') {
            this.setState({itemPrice: event.target.value});
        } else  if (event.target.name === 'itemCondition') {
            this.setState({itemCondition: event.target.value});
        }
    }

    //handle submission. be sure to update parent array
    handleSubmission = (event) => {
        event.preventDefault();
        let item = {itemName: this.state.itemName,itemPrice: this.state.itemPrice,itemCondition: this.state.itemCondition};
        this.state.itemsForSell.push(item);
        this.setState({itemsForSell: this.state.itemsForSell});
        this.setState({
            itemName : '',
            itemPrice : 0,
            itemCondition : ''
        })
        this.props.updateItemsForSell(this.state.itemsForSell);
    }

    render() { 
        return ( 
            <Fragment>
                <form action="">
                    <fieldset>
                        <legend>Sell</legend>
                        <div className="formGroup">
                            <label htmlFor="itemName">Name:</label>
                            <input type="text" name='itemName' id='itemName' onChange={this.handleChange} value={this.state.itemName}/>
                        </div>

                        <div className="formGroup">
                            <label htmlFor="itemPrice">Price:</label>
                            <input type="number" name='itemPrice' id='itemPrice' onChange={this.handleChange} value={this.state.itemPrice}/>
                        </div>

                        <div className="formGroup">
                            <label htmlFor="itemCondition">Condition:</label>
                            <input type="text" name='itemCondition' id='itemCondition' onChange={this.handleChange} value={this.state.itemCondition}/>
                        </div>
                        <div className="formGroup">
                            <button onClick={this.handleSubmission}>Submit</button>
                        </div>
                    </fieldset>
                </form>
            </Fragment>
         );
    }
}
 
export default Sell;
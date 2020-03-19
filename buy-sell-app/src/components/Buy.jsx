import React, { Component, Fragment } from 'react';
import '../App.css';

class Buy extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            itemOffer : [],
            offerName : '',
            offerPrice : 0
            
         }
    }

    //handle changes to fields
    handleChange = (event) => {
        if (event.target.name === 'offerName') {
            this.setState({offerName: event.target.value});
        } else  if (event.target.name === 'offerPrice') {
            this.setState({offerPrice: event.target.value});
        } 
    }

    //handle submission. be sure to update parent array
    handleSubmission = (event) => {
        event.preventDefault();
        let offer = {offerName: this.state.offerName,offerPrice: this.state.offerPrice};
        this.state.itemOffer.push(offer);
        this.setState({itemsForSell: this.state.itemOffer});
        this.setState({
            offferName : '',
            offerPrice : 0
            
        })
        this.props.updateItemOffers(this.state.itemOffer);
    }

    render() { 
        return ( 
            <Fragment>
                <form action="">
                    <fieldset>
                        <legend>Buy</legend>
                        <div className="formGroup">
                            <label htmlFor="offerame">Name:</label>
                            <input type="text" name='offerName' id='offerName' onChange={this.handleChange} value={this.state.offerName}/>
                        </div>

                        <div className="formGroup">
                            <label htmlFor="offerPrice">Price:</label>
                            <input type="number" name='offerPrice' id='offerPrice' onChange={this.handleChange} value={this.state.offerPrice}/>
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
 
export default Buy;
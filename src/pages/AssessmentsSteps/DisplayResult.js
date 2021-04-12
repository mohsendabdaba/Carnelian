import React, { Component } from 'react';


export default class DisplayResult extends Component {
  render() {
    return(
      <div className="wrapper">
        <div>
          Shopping Cart: 0 total items.
        </div>
        <div>Total: 0</div>

        <div className="product"><span role="img" aria-label="ice cream">🍦</span></div>
        <button>Add</button> <button>Remove</button>
      </div>
    )
  }
}
import React, { Component } from 'react'
//import PokerChips from './images/pokerchips.png'
import './texasholdem.scss'




class THActs extends Component {


constructor(props) {
    super(props)
    this.state = {
        clicks: 0,
    }
  
}

IncrementItem = () => {
    this.setState({ clicks: this.state.clicks + 20})
}

DecreaseItem = () => {
    this.setState({ clicks: this.state.clicks - 1})
}










render() {
return (
    <>



<div className="actingArea">

   <div className="act">
    <button onClick={this.IncrementItem}>Increase Bet by $20</button>
   <h1 className="betAmount">$ { this.state.clicks}</h1>
    <button onClick={this.DecreaseItem}>Decrease Bet by $1</button>
    </div>

</div>

</>

)

}

}


export default THActs; 





import React, { Component } from 'react'
import PokerChips from './images/pokerchips.png'
import './texasholdem.scss'



class THActs extends Component {



    

constructor(props) {
super(props) 
    this.state = {
        blind: ''
}

}

onChange(e) {
    this.setState({
        blind: e.target.value
    })
}

blindbet = () => {
    console.log('add blind bet', this)
}


render() {
return (
    <>

<div className="potArea">

<div className="potTitle">The Pot</div>

<figure><img src={PokerChips} /></figure>
<div className="potNumber">$ {this.state.blind}</div>

</div>

<div className="actingArea">

<div className="actingTitle">Submit Acts</div>

   <div className="act">
    <input type="text" placeholder="$" onChange={this.onChange}/>
    <button className="actingButton" onClick={this.blindbet}  > Blind Bet</button>
    </div>
    <div className="act">
   
    <input type="text" placeholder="$"/>
    <button className="actingButton">Bet</button>
    </div>

    <div className="act">
    <input type="text" placeholder="$"/>
    <button className="actingButton" >Raise</button>
    </div>
    <div className="act">
    <input type="text" placeholder="$"/>
    <button className="actingButton" >Re-Raise</button>
    </div>


  </div>




</>

)
}


}


export default THActs; 





import './ActionArea.scss'

const ActionArea = (props) => {

  return (
    <div className="ActionArea">
      <button onClick={props.addDealerCard} className="actionBtn" >Add Dealer Card</button>
      <button onClick={props.addUserCard} className="actionBtn" >Add User Card</button>
      <button onClick={props.hit} className="actionBtn" >Hit</button>
      <button onClick={props.stand} className="actionBtn" >Stand</button>
      <button onClick={props.double} className="actionBtn" >Double</button>
      <button onClick={props.split} className="actionBtn" >Split</button>
      <button onClick={props.endGame} className="actionBtn" >End Game</button>
    </div>
  )
}
export default ActionArea
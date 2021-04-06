import './ActionArea.scss'

const ActionArea = (props) => {

  return (
    <div className="ActionArea">
      <button onClick={props.addDealerCard} className="actionBtn" >Add Dealer Card</button>
      <button onClick={props.addUserCard} className="actionBtn" >Add User Card</button>
    </div>
  )
}
export default ActionArea
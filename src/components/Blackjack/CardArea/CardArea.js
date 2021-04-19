import './CardArea.scss'

const CardArea = (props) => {

  return (
    <div className="card-area-container">
      <div className="area-name">{props.name} <span className="score">{props.score}</span></div>
      <div className="card-area">
      { props.theCards.map((card, index) => {
        //console.log(card)

        return (
          <div className="cardItem" key={index}>
            <img src={`./images/${card.image}`} alt={'Card ' + card.name} name={card.value}/>
          </div>
        )
      }) }
      </div>
    </div>
  )
}
export default CardArea; 
import './CardArea.scss'

const CardArea = (props) => {

  return (
    <div className="card-area-container">
      <div className="area-name">{props.name}</div>
      <div className="card-area">
      { props.cards.map((card, index) => {
        return (
          <div className="cardItem" key={index}>
            <img src={`./images/cards/${card.code.toLowerCase()}.svg`} alt={'Card ' + card.code} />
          </div>
        )
      }) }
      </div>
    </div>
  )
}
export default CardArea; 
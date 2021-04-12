import './Tumbler.scss'
import icon1 from './icons/slot_1.png'
import icon2 from './icons/slot_2.png'
import icon3 from './icons/slot_3.png'
import icon4 from './icons/slot_4.png'
import icon5 from './icons/slot_5.png'
import icon6 from './icons/slot_6.png'
import icon7 from './icons/slot_7.png'

import flipper from './icons/flipper.png'

const Tumbler = props => {
    let iconArray = [icon1, icon2, icon3, icon4, icon5, icon6, icon7]
    // random number to make tumbler rotation asynchronous 
    let rng = '-0.' + (Math.floor(Math.random() * 6) + 1).toString() + 's'

    return (
        <div className="tumbler">
            {props.active ? (
                <img src={flipper} className="flipping" style={{animationDelay: rng}} />
            ) : (
                <img src={iconArray[props.number - 1]} />
            )}
        </div>
    )
}

export default Tumbler
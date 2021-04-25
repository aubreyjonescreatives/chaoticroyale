import './SlotPayouts.scss'

import icon1 from '../Tumbler/icons/slot_1.png'
import icon2 from '../Tumbler/icons/slot_2.png'
import icon3 from '../Tumbler/icons/slot_3.png'
import icon4 from '../Tumbler/icons/slot_4.png'
import icon5 from '../Tumbler/icons/slot_5.png'
import icon6 from '../Tumbler/icons/slot_6.png'
import icon7 from '../Tumbler/icons/slot_7.png'

const SlotPayouts = props => {


    return (

        <div className="row mt-5 justify-content-center slot-payouts">
            <div className="col-12">   
                <h1>Slot Payouts (multiplied by # of tumblers)</h1>
            </div>
            

            <div className="col-1">
                <img src={ icon1 } />
                <p className="payout-desc">
                    1x 
                </p>
            </div>

            <div className="col-1">
                <img src={ icon2 } />
                <p className="payout-desc">
                    2x 
                </p>
            </div>

            <div className="col-1">
                <img src={ icon3 } />
                <p className="payout-desc">
                    3x 
                </p>
            </div>

            <div className="col-1">
                <img src={ icon4 } />
                <p className="payout-desc">
                    4x 
                </p>
            </div>

            <div className="col-1">
                <img src={ icon5 } />
                <p className="payout-desc">
                    5x 
                </p>
            </div>

            <div className="col-1">
                <img src={ icon6 } />
                <p className="payout-desc">
                    6x 
                </p>
            </div>

            <div className="col-1">
                <img src={ icon7 } />
                <p className="payout-desc">
                    7x 
                </p>
            </div>
            
        </div>
    )
}

export default SlotPayouts
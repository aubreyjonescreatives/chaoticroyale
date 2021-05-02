import React, {useState, useEffect} from 'react'
import './Track.scss'

function Track(props) {

  const [place, setPlace] = useState(false)

  useEffect(()=> {
      if(props.place > 0) {
            if(props.place == 95) {
                if(Math.random() < 0.8) {
                    setPlace('place-' + props.place + '-1')
                } else {
                    setPlace('place-' + props.place + '-2')
                }
            } else {
                setPlace('place-' + props.place)
            }
      } else {
          setPlace(null)
      }
  }, [props.place])

  let bgColor = '#fff'
  
  if(props.track === 1) {
    bgColor = '#c7d182'
  } else if(props.track === 2) {
    bgColor = '#ba9568'
  } else if(props.track === 3) {
    bgColor = '#a8878e'
  } else {
    bgColor = '#778da8'
  }

  return (
    <div 
        className="track-main"
        style={{backgroundColor: bgColor}}
    >
        <div className={props.running ? place : null}>
        <div 
            className={props.running ? 'race-horse running' : 'race-horse'} 
            
        ></div>
        </div>

    </div>
  );
}

export default Track;
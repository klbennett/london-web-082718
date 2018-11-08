import React, { Fragment } from 'react'
import Sushi from '../components/Sushi'
import MoreButton from '../components/MoreButton'


const SushiContainer = ({eaten, eatSushi, nextFour, sushis, incrementCounter}) => {
  return (
    <Fragment>
      <div className="belt">
        {
          nextFour().map(sushi => <Sushi eaten={eaten} eatSushi={eatSushi} sushi={sushi}/> )
        }
        <MoreButton incrementCounter={incrementCounter}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer

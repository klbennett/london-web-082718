import React from 'react'

import Painting from './Painting'

const PaintingList = props =>
  <div>
    {
      props.paintings.map(painting => <Painting selectPainting={props.selectPainting} removePainting={props.removePainting} painting={painting} />)
    }
  </div>

export default PaintingList

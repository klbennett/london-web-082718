import React from 'react'

import Painting from './Painting'

const PaintingList = props =>
  <div>
    {
      props.paintings.map(painting => <Painting painting={painting} />)
    }
  </div>

export default PaintingList

import React from 'react'

const HogDetail = (props) => {
 return (<div>
   <p>{props.hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}</p>
   {props.hog.greased ? <p>Is Greased</p> : <p>Not greased</p>}
   </div>)
}

export default HogDetail

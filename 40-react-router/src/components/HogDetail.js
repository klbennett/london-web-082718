import React from 'react'

const HogDetail = (props) => {
  console.log(props)
  let imgSrc = require(`../hog-imgs/${props.hog.name.split(" ").join("_").toLowerCase()}.jpg`)
   return (<div>
             <h4>{props.hog.name}</h4>
             <img src={imgSrc}/>
             <p>{props.hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}</p>
              {props.hog.greased ?
                 <p>Is Greased</p> :
                 <p>Not greased</p>
               }
             </div>)
}

export default HogDetail

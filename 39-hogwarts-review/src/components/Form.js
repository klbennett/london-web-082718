import React from 'react'

const Form = (props) => {
  return (
    <div>
      <p>Sort By Name</p>
      <input type="checkbox" name="name" onChange={(e)=> props.handleChange(e)}/>
      <p>Sort By Weight</p>
      <input type="checkbox" name="weight" onChange={(e)=> props.handleChange(e)}/>
      <p>Is greased</p>
      <input type="checkbox" name="greased" onChange={(e)=> props.handleChange(e)}/>

    </div>
  )
}

export default Form

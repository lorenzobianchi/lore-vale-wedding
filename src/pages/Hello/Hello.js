import React from 'react'
import Awesome from '../../components/Awesome'
import './Hello.css'

const Hello = (props) => (
  <div className="Hello">
    Welcome to <span className="Hello__Inmagik">INMAGIK</span> React App!
    <Awesome word={'AWESOOOME!'}/>
  </div>
)

export default Hello

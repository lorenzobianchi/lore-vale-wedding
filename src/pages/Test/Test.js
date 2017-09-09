import React, { Component } from 'react'
import './Test.css'

class Test extends React.Component {


constructor(props) {
  super(props);
  this.state = {value: ''}

  this.handleChange = this.handleChange.bind(this);

}

handleChange(event) {
  this.setState({value: event.target.value});
}


  render () {

    return  (
     <div className="Test">
       <textarea value={this.state.value} onChange={this.handleChange}/>
       <p>{this.state.value.length}</p>
     </div>
   )
  }
}

export default Test

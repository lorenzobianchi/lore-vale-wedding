import React, { PureComponent } from 'react'
import {  Navbar, NavLink } from 'reactstrap'
import './TransparentNavbar.css'

const styles = {
}


class TransparentNavbar extends PureComponent {

     state = {
        backColor1: '#0fb8ad',
        backColor2: '#1fc8db',
        backColor3: '#2cb5e8',
      }

    toggleColor1 = () => {
      this.setState({
        backColor1: '#' + Array.apply(null, { length: 6 })
          .map(() => Math.floor(Math.random() * 16).toString(16))
          .join('')
      })
    }

    toggleColor2 = () => {
      this.setState({
        backColor2: '#' + Array.apply(null, { length: 6 })
          .map(() => Math.floor(Math.random() * 16).toString(16))
          .join('')
      })
    }

    toggleColor3 = () => {
      this.setState({
        backColor3: '#' + Array.apply(null, { length: 6 })
          .map(() => Math.floor(Math.random() * 16).toString(16))
          .join('')
      })
    }


    render() {
      return (
        <div>
          <Navbar
            light
            color="faded"
            className="TransparentNavbar"
            >
             <div className="TransparentNavbar_title">
               <img src="http://lore-vale.com/img/castle.png" className="TransparentNavbar_title_img" />
               <h4 className="main-title">Lorenzo & Valentina</h4>
             </div>
            <div className="TransparentNavbar_toggler">
              <p className="colors_btn_text">Premi x cambiare colore!</p>
              <button className="colors_btn" onClick={this.toggleColor1}  style={{backgroundColor: `${this.state.backColor1}`}} />
              <button className="colors_btn" onClick={this.toggleColor2}  style={{backgroundColor: `${this.state.backColor2}`}} />
              <button className="colors_btn" onClick={this.toggleColor3}  style={{backgroundColor: `${this.state.backColor3}`}} />
            </div>
          </Navbar>
            <div
              className="TransparentNavbar_collapse"
              style={{background: `linear-gradient(141deg, ${this.state.backColor1} 0%, ${this.state.backColor2} 51%, ${this.state.backColor3} 75%)`}}
              >
              <ul className="TransparentNavbar_collapse_list">
                <li><NavLink href="/">Info</NavLink></li>
                <li><NavLink href="/photos">Photos</NavLink></li>
              </ul>
            </div>
        </div>
      );
    }
  }

export default TransparentNavbar

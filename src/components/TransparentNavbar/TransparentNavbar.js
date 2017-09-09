import React, { PureComponent } from 'react'
import {  Navbar, NavbarToggler, NavLink } from 'reactstrap'
import './TransparentNavbar.css'


class TransparentNavbar extends PureComponent {

     state = {
        collapsed: true,
      }

    toggleNavbar = () => {
      this.setState({
        collapsed: !this.state.collapsed
      })
    }

    render() {
      return (
        <div>
          <Navbar color="faded" light className="TransparentNavbar">
             <div className="TransparentNavbar_title">
               <img src="http://lore-vale.com/img/castle.png" className="TransparentNavbar_title_img" />
               <h4>Lorenzo & Valentina</h4>
             </div>
            <div className="TransparentNavbar_toggler">
              <NavbarToggler onClick={this.toggleNavbar}  />
            </div>
          </Navbar>
          {this.state.collapsed ?

            <div className="TransparentNavbar_collapse">
              <ul className="TransparentNavbar_collapse_list">
                <li><NavLink href="/">Info</NavLink></li>
                <li><NavLink href="/photos">Photos</NavLink></li>
              </ul>
            </div> : null}
        </div>
      );
    }
  }

export default TransparentNavbar

import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Route, Link } from 'react-router-dom'
import { withRouter } from "react-router-dom"
//import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from "react-bootstrap";
import { Navbar, NavbarBrand, NavbarNav, Button, NavItem, NavLink, NavbarToggler, Collapse, FormInline, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Fa } from "mdbreact";
import '../App.css';

//import '../App.css';
import axios from 'axios'

class Navbarclass extends Component {
    constructor(props) {
        super(props)
        this.logout = this.logout.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            isOpen: false
        };
       

    }
   
    handleClick(event) {
        this.setState({ isOpen: !this.state.isOpen });
    }
  
    logout(event) {
        event.preventDefault()
        console.log('logging out')
        axios.post('/user/logout').then(response => {
          console.log(response.data)
          if (response.status === 200) {
            this.props.updateUser({
              loggedIn: false,
              username: null
            })
          }
        }).catch(error => {
            console.log('Logout error')
        })
      }

    render() {
        const loggedIn = this.props.loggedIn;
        console.log('navbar render, props: ')
        console.log(this.props);
        
        
        return (
            <Navbar color="#FAFAFA" light expand="md"  >
                <NavbarBrand className="brand" >
                    <a href="/" style={{ textDecoration: 'none' }}><strong style={{ color: "#F45C24"}}>Brainy</strong></a>
                </NavbarBrand>
                <NavbarToggler
                    onClick={this.handleClick} 
                />
                {loggedIn ? (<Collapse id="navbarCollapse"  isOpen={this.state.isOpen} navbar>

                    <NavbarNav className="navbox" right>
                        <NavItem className="navitem">
                            <NavLink className="waves-effect waves-light" to={'/profile/' + this.props.username}>{this.props.username}</NavLink>
                        </NavItem>
                        <NavItem className="navitem">
                            <NavLink className="waves-effect waves-light" to="#!" onClick={this.logout}>Logout</NavLink>
                        </NavItem>

                    </NavbarNav>

                </Collapse>) : (<Collapse id="navbarCollapse" isOpen={this.state.isOpen} navbar>
                        <NavbarNav className="navbox" right>
                            <NavItem className="navitem">
                                <NavLink to="#!">Home</NavLink>
                            </NavItem>
                            <NavItem className="navitem">
                                <NavLink to="#!">Features</NavLink>
                            </NavItem>
                            <NavItem className="navitem">
                                <NavLink to="#!">Pricing</NavLink>
                            </NavItem>
                            <NavItem className="navitem">
                                <NavLink className="waves-effect waves-light" style={{ textDecoration: 'none' }} to="/login" >  Login </NavLink>
                            </NavItem>
                            <NavItem className="navitem">
                                <NavLink className="waves-effect waves-light" style={{ textDecoration: 'none' }}  to="/signup">  Signup </NavLink>
                            </NavItem>
                        </NavbarNav>
                        




                    </Collapse>)}

            </Navbar>


        );

    }
}

export default withRouter(Navbarclass);
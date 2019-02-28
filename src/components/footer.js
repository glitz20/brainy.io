import React, { Component } from 'react'

class Footer extends Component {

    render() {
        return (
            <div className="footer">

                <span style={{ textAlign: "center", alignItems: "center", display: "block" }}>

                    <span style={{ marginLeft: "20px" }}> About us </span>   <span style={{ marginLeft: "20px" }}> Solvers</span>  <span style={{ marginLeft: "20px" }}> Companies</span>
                    <span style={{ marginLeft: "20px" }}> Case Studies </span> 
                </span>
                  <br />
                <span style={{ textAlign: "center", alignItems: "center", display: "block" }}>  {'\u00A9'}Brainy.io 2019</span>

                
            </div>
            
            )
    }

}

export default Footer;
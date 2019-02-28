import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import FaDollar from 'react-icons/lib/fa/dollar';
import FaEye from 'react-icons/lib/fa/eye';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router'
import { Button } from 'react-bootstrap';
import { browserHistory } from 'react-router';
import ItemService from './ItemService';
import '../App.css';


class ItemRow extends Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    
    handleClick(e) {
        e.preventDefault();
        console.log(this.props.history)
        this.props.history.push('/description/' + this.props.obj._id);
    }


  

    render() {
        let status
        if (this.props.obj.status === "New") {
            status = <button className="newbutton">New</button>
            
        }
        else if (this.props.obj.status === "Trending") {
            status = <button className="trendingbutton">Trending</button>
            
        }
        else if (this.props.obj.status === "Completed") {
            status = <button className="completebutton">Completed</button>
            
        }
        else if (this.props.obj.status === "Ongoing") {
            status = <button className="ongoingbutton">Ongoing</button>
          
        }
        else {
            status = ""
           
        }
        return (
            <Row className="show-grid itemdisplay" onClick={this.handleClick}>
                <Col xs={3} md={3} className="imgsection" style={{ backgroundImage: `url(${this.props.obj.image})` }}>
                   
                   
                </Col>
                <Col xs={9} md={9} className="itemcontent">
                    <div className="iteminfo">
                        By {this.props.obj.company} {'     '}
                        <span className="date">Submit by {this.props.obj.deadline}</span>
                        {status}
                      
                    </div>
                  
                    <div className="itemquestion">
                        <Row>
                            <Col xs={8} md={8} className="itemtitle">
                                {this.props.obj.title}
                            </Col>
                            <Col xs={4} md={4} className="pageview">
                                <FaDollar />{this.props.obj.prize} <br />
                                <FaEye /> 123 views

                            </Col>
                        </Row>
                        
                            
                        

                        </div>
                    
                    

                    <div className="itemtags">
                        <button className="tagbutton">{this.props.obj.tag1}</button>
                        <Button bsClass="tagbutton">{this.props.obj.tag2}</Button>
                        <Button bsClass="tagbutton">{this.props.obj.tag3}</Button>
                    </div>
                    
                </Col>
            </Row>
        );
    }
}

export default withRouter(ItemRow);

import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

import { Container, Row, Col } from 'react-bootstrap';
import ItemService from './ItemService';
import axios from 'axios';
import ItemRow from './itemrow';
import { Button } from 'react-bootstrap';
import { StickyContainer, Sticky } from 'react-sticky';
import Footer from './footer';
import '../index.css';



class Home extends Component {

    constructor(props) {
        super(props);

        this.state = { value: '', items: '', status: 'all',tags:'' };
        this.handleClick = this.handleClick.bind(this);

    }
    componentWillMount() {
        axios.get('/items/')
            .then(response => {
                this.setState({ items: response.data });
            })
            .catch(function (error) {
                console.log(error);

            })
    }

    handleClick(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    itemRow() {
        if (this.state.items instanceof Array) {

            if (this.state.tags === "") {

                if (this.state.status === "all") {
                    return this.state.items.map(function (object, i) {
                        return <ItemRow obj={object} key={i} />;
                    })
                }

                else {
                    let status = this.state.items.filter((item) => item.status === this.state.status)
                    return status.map(function (object, i) {
                        return <ItemRow obj={object} key={i} />;
                    })

                }

            }

            else {
                let tags = this.state.items.filter((item) => item.tag2 === this.state.tags)
                return tags.map(function (object, i) {
                    return <ItemRow obj={object} key={i} />;
                })
            }

        }
    }

    render() {
        return (
           
            <div>
                 
                <Row className="homeintro">
                    <Col className="hometext" xs={6} md={6}>
                        <p style={{ fontWeight: '700', fontSize: '35px' }}>Help companies solve real problems</p><br />
                        <p style={{ fontWeight: '400', fontSize: '25px' }}>brainy.io is a network of solvers and innovaters to help companies and organizations solve innovation problem.
                            Be a part of solution while winning cash prize as reward.
                            </p><br />

                        <Button bsClass="brainybutton">Solve Now</Button>

                    </Col>
                    <Col className="homepic" xs={6} md={6}>
                        <img className="imageStyle" src="https://res.cloudinary.com/dgezrstzt/image/upload/v1546203435/home_l5pilc.png" />
                    </Col>
                </Row>

                <Row className="homebody">

                    
                    <Col className="filter" xs={2} md={2}>
                        <Button bsClass="btn " onClick={this.handleClick} value="all" name="status">All</Button><br />
                        <Button bsClass="btn" onClick={this.handleClick} value="ongoing" name="status">Ongoing</Button> <br />
                        <Button bsClass="btn" onClick={this.handleClick} value="new" name="status">New</Button> <br />
                        <Button bsClass="btn" onClick={this.handleClick} value="trending" name="status">Trending</Button> <br />
                        <Button bsClass="btn" onClick={this.handleClick} value="completed" name="status">Completed</Button> <br />

                        Popular Tags<br />

                        <Button value="Technology" name="tag1" onClick={this.handleClick}>Technology</Button><br />
                        <Button value="Innovation" name="tag2" onClick={this.handleClick}>Innovation</Button><br />
                        <Button value="VR" name="tag3" onClick={this.handleClick}>VR</Button><br />

                          
                       
                                              
                        
                    </Col>

                    <Col className="homeitem" xs={10} md={10}>
                        {this.itemRow()}

                    </Col>

                </Row>
                
               <Footer />
              
               
            </div>                    
        );
    }
}

export default Home

import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router'
import { browserHistory } from 'react-router';
import '../App.css';
import axios from 'axios';
import Footer from './footer';

import QuillEditor from './quill';

class Description extends Component {
    constructor(props) {
        super(props);
        this.state = { loggedIn: false, title: " ", prize: " ", introduction: " ", question: " ", id:this.props.match.params.id,username:'',image:'',deadline:'' };
        this.getUser = this.getUser.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
        this.yo = this.yo.bind(this)
    }
    componentDidMount() {
        axios.get('/items/description/' + this.props.match.params.id)
            .then(response => {
                this.setState({ title: response.data[0].title, question: response.data[0].question, introduction: response.data[0].introduction, image: response.data[0].image, completed: response.data[0].completed, prize: response.data[0].prize, deadline:response.data[0].deadline });
            })
            .catch(function (error) {
                console.log(error);

            })

            this.getUser()
    }

    
    getUser() {
        axios.get('/user/').then(response => {
            console.log('Get user response: ')
            console.log(response.data)
            if (response.data.user) {
                console.log('Get User: There is a user saved in the server session: ')

                console.log(response.data.user.username)

                this.setState({
                    loggedIn: true,
                    username: response.data.user.username
                   
                })
            } else {
                console.log('Get user: no user');
                this.setState({
                    loggedIn: false,

                })
            }
        })
    }
   
    yo() {

        
             if (this.state.loggedIn) {
            console.log(this.state.username);
            return (
                <QuillEditor idnt={this.state.id} username={this.state.username} />
            );


        }

        else {
            return (
                <p> You must be logged in</p>
            );

        }
        

      
       

    }

    render() {
        return (

            <div>
                <div className="descriptionheader">
                    <p className="destitle">{this.state.title}</p><br />
                    <div className="desstatus">
                        <span style={{ float: "left", padding: "14px 12px"}}>Due Date: {this.state.deadline}</span>
                        <span style={{ float: "left", padding: "14px 17px" }}> Submissions:{this.state.completed}</span>
                        <span style={{ float: "right", padding: "14px 12px"}}>Prize Money:{this.state.prize}</span>
                       
                        

                    </div>
                    <Row className="desquestion">
                      
                        <Col xs={9} md={9}>
                            <div>
                                <p >{this.state.introduction}</p>
                                <p >{this.state.question}</p>
                            </div>     

                        </Col>

                        <Col xs={3} md={3}>
                            <img className="descriptionpic" src={this.state.image} />

                        </Col>

                    </Row>

                      
                </div>

                <div className="textbox">
                  
                    <this.yo />

                </div>

                < Footer />

            </div>
        );
    }

}

export default withRouter(Description);

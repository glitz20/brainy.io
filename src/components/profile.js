import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';
import { Route, Link } from 'react-router-dom';

import axios from 'axios'

class Profile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username:'',
            age: '',
            school: '',
            major: '',
            lookingfor: '',
            graduationdate: '',
            url:''
           
        };
        

    }

    componentDidMount() {
        console.log('This is the output')
      
        
        axios.get('/profile/' + this.props.match.params.username)

       
            .then(response => {
                console.log(response.data[0].url)
                
                this.setState({
                    username: response.data[0].username,
                    age: response.data[0].age,
                    school: response.data[0].school,
                    major: response.data[0].major,
                    lookingfor: response.data[0].lookingfor,
                    graduationdate: response.data[0].graduationdate,
                    url:response.data[0].url
                });
            })
                    
             .catch(function (error) {
                        console.log(error);

              })

            
    }



    render() {
        let profilestatus;
        if (this.state.url !== "") {
            profilestatus =<a href={this.state.url} target="_blank">Link Name</a>
        }
        return (
            <div className="profiledisplay">
                <div className="textcontainer">
                    <div className="profilepicture">

                        <img className="profilepic" src="https://res.cloudinary.com/dgezrstzt/image/upload/v1547103030/1891016-256_gshpxo.png" />

                    </div>

                    <Row >
                        <Col xs={4} md={4} style={{ textAlign: 'left' }} className="profilecol">
                            Username <br />
                            Age <br />
                            School  <br />
                            Major <br />
                            LookingFor <br />
                            GraduationDate <br />

                        </Col>

                        <Col xs={8} md={8} style={{ textAlign: 'left' }} className="profilecol">

                            {this.state.username}<br />
                            {this.state.age}<br />
                            {this.state.school}<br />
                            {this.state.major}<br />
                            {this.state.lookingfor}<br />
                            {this.state.graduationdate}<br />

                        </Col>

                    </Row>

                    <Link to={'/editprofile/' + this.props.match.params.username} className="btn btn-link" >
                        <span style={{ color: 'white' }}>Edit Profile</span>
                    </Link><br />

                    {profilestatus}



                </div>
               
              
               
                </div>            
            
            )

    }
        

}

export default withRouter(Profile);
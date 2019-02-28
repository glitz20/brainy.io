import React, { Component } from 'react';

import ReactQuill, { Quill, Toolbar } from 'react-quill'; // ES6
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router'
import Charts from './chart';
import { browserHistory } from 'react-router';
import '../App.css';
import Response from './response';
import axios from 'axios';




class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = { complete: false, time: " ", submissions: " ",answers:''};
      }

    componentDidMount() {
        axios.get('/responses/' + this.props.match.params.id)
            .then(response => {
                this.setState({answers:response.data})
                
            
            })
            .catch(function (error) {
                console.log(error);
            })
    }


    tabRow() {
        if (this.state.answers instanceof Array) {
          
                return this.state.answers.map(function (object, i) {
                    return <Response obj={object} key={i} /> ;
                })
            
            

        }
    }
   
    render() {
        return (

            <div>
                <Charts />
                {this.tabRow()}
            </div>
        );
    }

}

export default withRouter(Dashboard);

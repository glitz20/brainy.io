 import React, { Component } from 'react';
import { Form, TextArea } from 'semantic-ui-react'
import ReactQuill, { Quill, Toolbar } from 'react-quill'; // ES6
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router'
import { browserHistory } from 'react-router';
import '../App.css';
import axios from 'axios';
import CommentService from './commentservice';

class EditComment extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.editCommentService = new CommentService();
        this.state = { comment: '', clarity: '', unique: '', relevance: '', answer: '', survey1: '', survey2: '', survey3: '', survey4: '', survey5: '',response1: '', response2: '', response3: '', response4: '', response5: '',id:'0'};
    }

    componentDidMount() {
        axios.get('/responses/editcomment/' + this.props.match.params.id)

            .then(response => {
                console.log(response.data[0].id)
                this.setState({
                    answer: response.data[0].answer,
                    comment: response.data[0].comment,
                    clarity: response.data[0].clarity,
                    unique: response.data[0].unique,
                    relevance: response.data[0].relevance,
                    response1: response.data[0].response1,
                    response2: response.data[0].response2,
                    response3: response.data[0].response3,
                    response4: response.data[0].response4,
                    response5: response.data[0].response5,
                    id: response.data[0].id
                })

                axios.get('/items/description/' + this.state.id)
                    .then(response => {
                        console.log(this.state.id)
                        console.log(response.data)
                        this.setState({
                            survey1: response.data[0].survey1,
                            survey2: response.data[0].survey2,
                            survey3: response.data[0].survey3,
                            survey4: response.data[0].survey4,
                            survey5: response.data[0].survey5
                        });
                    })

                    .catch(function (error) {
                        console.log(error);

                    })

            })

            .catch(function (error) {
                console.log(error);

            });


         



            
        //getting the survey question

        


    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.editCommentService.updateComment(this.state.comment, this.state.unique, this.state.relevance, this.state.clarity,  this.props.match.params.id);
    }

    render() {
        
        return (
            <Row className="box1 show-grid" >

                <Col xs={12} md={8}>
                    {this.state.survey1}<br />
                    {this.state.response1}<br />
                    {this.state.survey2}<br />
                    {this.state.response2}<br />
                    {this.state.survey3}<br />
                    {this.state.response3}<br />
                    {this.state.survey4}<br />
                    {this.state.response4}<br />
                    {this.state.survey5}<br />
                    {this.state.response5}<br />

                    <ReactQuill name="editor"
                        className='editor2'
                        readOnly={true}
                        toolbar={false}
                        modules={this.modules}
                        theme="bubble"
                        value={this.state.answer}

                    />
                </Col>



                <Col xs={6} md={4} className="ratingbox">
                    
                    <form onSubmit={this.handleSubmit}>

                        <label>
                            Comment:<br/>
                             <textarea name="comment" value={this.state.comment} onChange={this.handleChange} />

                        </label>
                           
                        <label>
                            Clarity:
                <input name="clarity" type="text" value={this.state.clarity} onChange={this.handleChange} className="form-control" />
                        </label><br />

                        <label>
                            Unique:
                <input name="unique" type="text" value={this.state.unique} onChange={this.handleChange} className="form-control" />
                        </label><br />

                        <label>
                            Relevance:
                <input name="relevance" type="text" value={this.state.relevance} onChange={this.handleChange} className="form-control" />
                        </label><br />
                    <input type="submit" value="Update" className="btn btn-primary" />

                    </form>





                </Col>

            </Row>




        );
    }
}

export default withRouter(EditComment);
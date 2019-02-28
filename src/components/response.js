import React, { Component } from 'react';
import { Form, TextArea } from 'semantic-ui-react'
import ReactQuill, { Quill, Toolbar } from 'react-quill'; // ES6
import { Container, Row, Col, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router'
import { browserHistory } from 'react-router';
import '../App.css';
import axios from 'axios';
import Rating from './rating'
import { ProgressBar } from 'react-bootstrap';


class Response extends Component {

    constructor(props) {
        super(props);
        this.state = { totalscore: 50, comment: this.props.obj.comment, id: this.props.obj.id, survey1: '', survey2: '', survey3: '', survey4: '', survey5: ''}
        this.handleChange = this.handleChange.bind(this)
    }

    componentDidMount() {
        //getting the survey question

        axios.get('/items/description/' + this.state.id)

            .then(response => {
                console.log(response.data)
                this.setState({
                    survey1: response.data[0].survey1,
                    survey2: response.data[0].survey2,
                    survey3: response.data[0].survey3,
                    survey4: response.data[0].survey4,
                    survey5: response.data[0].survey5
                });
            })
            
            .catch(function(error) {
                console.log(error);

            })

    }

   

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    render() {
        console.log(this.state.survey1)
        var totalscore = (this.props.obj.unique + this.props.obj.clarity + this.props.obj.relevance)/3;
        let progressbar;
        if (totalscore <= 60) {
            progressbar = <ProgressBar bsStyle="danger" now={totalscore} label={`${totalscore}%`} />
        } 

        else if (totalscore <= 80) {
            progressbar = <ProgressBar bsStyle="info" now={totalscore} label={`${totalscore}%`} />
        } 

        else {
            progressbar = <ProgressBar bsStyle="success" now={totalscore} label={`${totalscore}%`} />
        } 
        
        let uploadfile;
        if (this.props.obj.url !== '') {
            uploadfile = <Button href={this.props.obj.url}>Uploaded files </Button>
        }
        else {
            uploadfile=''
        }


        return (
            <Row className="box1 show-grid" >

                <Col xs={12} md={8}>
                    Submitted by {this.props.obj.username} on {this.props.obj.date}<br />
                    <div className="surveyanswer" style={{ border: "solid grey 1px", padding: "8px" }}>
                        <span style={{ fontWeight:600 }}> {this.state.survey1}</span><br />
                        {this.props.obj.response1}<br style={{ lineHeight: "200%"}}/>
                        <span style={{ fontWeight: 600 }}>{this.state.survey2}</span><br />
                        {this.props.obj.response2}<br style={{ lineHeight: "200%" }} />
                        <span style={{ fontWeight: 600 }}>{this.state.survey3}</span><br />
                        {this.props.obj.response3}<br style={{ lineHeight: "200%" }} />
                        <span style={{ fontWeight: 600 }}>{this.state.survey4}</span><br />
                        {this.props.obj.response4}<br style={{ lineHeight: "200%" }} />
                        <span style={{ fontWeight: 600 }}> {this.state.survey5}</span><br />
                    {this.props.obj.response5}<br />
                        </div>

                    {uploadfile}
                    
                    <ReactQuill name="editor"
                        className='editor2'
                        readOnly={true}
                        toolbar={false}
                        modules={this.modules}
                        theme="bubble"
                        value={this.props.obj.answer}

                    />
                </Col>



                <Col xs={6} md={4} className="ratingbox">
                    Total <br />
                    {progressbar} <br />
                    Uniqueness <br />
                    <ProgressBar bsStyle="info" now={this.props.obj.unique} /><br />
                    Relevance <br />
                    <ProgressBar bsStyle="warning" now={this.props.obj.relevance} /><br />
                    Clarity <br />
                    <ProgressBar bsStyle="danger" now={this.props.obj.clarity} /><br />
                     Comments<br />
                    {
                       
                     <Form>
                            <TextArea name="comment" readonly="" placeholder='Add Comments here' style={{ minHeight: 200 , width:'100%'}} value={this.state.comment} onChange={this.handleChange}/>
                    </Form>
                    
                    }
                    <div style={{ textAlign:"center" }}>
                        <Button href={'/editcomment/' + this.props.obj._id} className="btn infobutton" style={{ textAlign: "center" }}>
                            Edit
                    </Button>
                        </div>
                   
                    
                  
              
                    
                   
                    
                    </Col>
               
            </Row>   
            
                    
               
                
        );
    }
}

export default withRouter(Response);

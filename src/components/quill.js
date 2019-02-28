import React, { Component } from 'react';

import ReactQuill from 'react-quill'; // ES6

import axios from 'axios'

import form from 'react-bootstrap';

import ProfileService from './profileservice';

import ItemService from './ItemService'; 

import { withRouter } from 'react-router'

import '../App.css';



class QuillEditor extends React.Component {
    constructor(props) {
        super(props)
        this.state = { text: '',  idnt: '', name: '', age: '', rating: 0, survey1: '', survey2: '', survey3: '', survey4:'',survey5:'',comment:'',date:'',unique:0,relevance:0,clarity:0,response1:'',response2:'',response3:'',response4:'',response5:'',array:[''],status:'',completed:'', responseUrl:null, url:''} // You can also pass a Quill Delta here
        this.handleChange = this.handleChange.bind(this)
        this.addItemService = new ItemService();
        this.handleForm = this.handleForm.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
       // this.getUser = this.getUser.bind(this)
        this.getSurvey = this.getSurvey.bind(this)
        this.getCompleted = this.getCompleted.bind(this)
        this.editProfileService = new ProfileService();
    }


    handleChange(value) {
        this.setState({
            text: value,
             date: new Date().toLocaleString() 
        })
      
    }

    //file upload

    handleUploadFile = event => {
        console.log(event.target.files[0]);
        const data = new FormData();
        data.append("file", event.target.files[0]);
        axios.post("/file/response", data).then(res => {
            console.log(res.data.fileUrl);
            this.setState({
                url: res.data.fileUrl

            });
          



        });
    };





    handleForm=(event) =>{
        this.setState({ [event.target.name]: event.target.value });
    }

    componentDidMount() {
       // this.getUser()
        this.getSurvey()
        this.getCompleted()
    }

  


    getCompleted() {
        axios.get('/profile/' + this.props.username)
            .then(response => {
                
                console.log(response.data[0].completed)
                this.setState({
                    status: response.data[0].completed.includes(this.props.idnt)

                });
            })

            .catch(function (error) {
                console.log(error);

            })

      
    }

    getSurvey() {
        axios.get('/items/description/'+this.props.match.params.id)
            .then(response => {
                this.setState({
                    survey1: response.data[0].survey1,
                    survey2: response.data[0].survey2,
                    survey3: response.data[0].survey3,
                    survey4: response.data[0].survey4,
                    survey5: response.data[0].survey5,
                    completed: response.data[0].completed+1
                })
            })
        

    }

    handleSubmit(event) {
        event.preventDefault();
        var answer = (this.state.text)

       


        const { rating, comment, date, unique, relevance, clarity, response1, response2, response3, response4, response5,url } = this.state;
        //axios.post('/responses/add/response', { answer: ab, username: this.state.username, id: this.props.idnt, rating: this.state.rating, comment: this.state.comment,date:this.state.date })
        axios.post('/responses/add/response', { answer, username:this.props.username, id: this.props.idnt, rating, comment, date, unique, relevance, clarity, response1, response2, response3, response4, response5,url })
            .then(function (response) {
                console.log(response);
            })
            .catch(err => console.log(this.state.text))


        this.editProfileService.updateComplete(this.props.idnt, this.props.username);
        this.addItemService.updatecompleted(this.state.completed, this.props.idnt);


        //redirectTo: '/'
         this.props.history.push('/');

    }



    render() {
        let button;
        if (this.state.status == true) {
            button = <button className="btn btn-primary" disabled={true} > Submit other challenges </button>
        }
        else {
            button = <button className="btn btn-primary"  onClick={this.handleSubmit}> Submit </button>
        }

          return (
              <div>

                  <div>

                      <form onChange={this.handleForm} onSubmit={this.handleSubmit}>
                          {/*
                           <label>
                            Do you like the UI?<br/>
                        <select name= "val1">
                            <option value="yes">Yes</option>
                                <option value="no">No</option>
                                 <option value="maybe">Maybe</option>
                        </select>
                        </label><br/>
                          */}

                         
                          <label>
                              {this.state.survey1}
                              <input name='response1' type="text" onChange={this.handleForm} className="form-control " />
                          </label><br />

                          <label>
                              {this.state.survey2}
                              <input name='response2' type="text" onChange={this.handleForm} className="form-control " />
                          </label><br />

                          <label>
                              {this.state.survey3}
                              <input name='response3' type="text" onChange={this.handleForm} className="form-control " />
                          </label><br />

                          <label>
                              {this.state.survey4}
                              <input name='response4' type="text" onChange={this.handleForm} className="form-control " />
                          </label><br />

                          <label>
                              {this.state.survey5}
                              <input name='response5' type="text" onChange={this.handleForm} className="form-control " />
                          </label><br />


                      </form>

                  </div>

                  <p style={{ fontWeight: "bold" }}> Write your answers here according to the guide stated above and submit it.</p>
                <ReactQuill value={this.state.text}
                    onChange={this.handleChange} />

                  <div>
                      <img width="320px" src={this.state.responseUrl} />
                      <div>
                          <input type="file" onChange={this.handleUploadFile} />
                      </div>
                  </div>

                {/*form*/}
              


                  {button}

            </div>

        )
    }
}

export default withRouter(QuillEditor);
